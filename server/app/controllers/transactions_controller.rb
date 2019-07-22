class TransactionsController < ApplicationController

    def index
        @Transactions=Transaction.all 
        render json: @Transactions
    end 

    # def show # to be able to just see one user at a time

    #     userTransactions = Transaction.find_by(id: params[:user_id]) 

    #     if userTransactions
    #     render json: userTransactions
    #     else 
    #     render json: {
    #         error: 'Saving Pots not found.'
    #     }, status: 404
    #     end

    # end

    def createTransaction

        @Transaction = Transaction.create(company: params[:company] , amount: params[:amount], date: params[:date], spendingSection: params[:category],  user_id: params[:user_id] )
        render json: Transaction.where(user_id: params[:user_id])

    end


    
end
