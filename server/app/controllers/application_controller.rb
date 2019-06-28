class ApplicationController < ActionController::API

#____________________________________________________________________________________________________________________

#                                               Helper Methods 
#____________________________________________________________________________________________________________________

#____get user________________________________________________________________________________________________________________
   
#now we want to be able to get this decoded token and check if it belongs to a valid user id  
# so want to check did we get a valid token - and does it have a valid user id  
# if yes to both we are safe to give the user id to acess it
    def get_current_user
        id = decode_token['id'] # we want to get back the value of the id from the decoded array that we reciseve from decoded_token
        User.find_by(id: id)
    end

#____get token________________________________________________________________________________________________________________

    # the user is sending the tokens via the headers and we can access the token via: request.headers['Authorisation']
    def token 
        request.headers['Authorisation']
    end

#____create secret________________________________________________________________________________________________________________
# for our secret key 
    def secret
        "shh"
    end 

#____encode data________________________________________________________________________________________________________________
# This will recieve some data and it will encode it using our secret
    def issue_token(data)
        JWT.encode(data, secret)
    end

#____decode token________________________________________________________________________________________________________________
 
# this will return an array .first will give us the message wanted - this could fail if token is not valid or the secret is wrong 
# to stop it from crashing our computer if it fails we can use the begin and rescue methods - this method will rescue errors       
    def decode_token
        begin
        JWT.decode(token, secret).first
        rescue
            {}
        end
    end

#using the being and rescue methods are known as a  "try catch"
     
end
