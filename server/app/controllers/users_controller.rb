class UsersController < ApplicationController

# def index - we dont want this since we dont want to be able to see all users
# end

def show # to be able to just see one user at a time

        user = User.find_by(id: params[:id]) # grab a user by user id 

        if user # if there user found exsists then....
        render json: user
        else # if the user is not found then...
        render json: {
            error: 'User not found.'
        }, status: 404
        end

    end

def signin
    user = User.find_by(username: params[:username]) # grab a user by username
    if user && user.authenticate(params[:password])
        render json: {username: user.username, token: issue_token({id: user.id})} # we do this so we dont get the whole user back but rather just the username and the token which we have access from all the helper methods 
    else
        render json: { error: 'Invalid Username/Password combination'}, status: 401 
    end
end 

# could test request.headers['Authorisation'] in byebug and see that we get token of "2" returned 
# request.headers['Authorisation'] is a string so we want to convert it to an integer for th id
# we use find_by rather than find - since we we dont have a user it will just return nil - but if we just used find and we didnt find the user we will get an error
# if we find a user and exists then we render the username and id 
# if the user does not exsist then we will return and error
def validate  
    # byebug
    # we can verify the user via our helper method current_user
    user = get_current_user
    if user 
        render json: {username: user.username, token: issue_token({id: user.id})} # pass token
    else
        render json: {error: 'User not found'}, status: 404
    end 
end 

end
