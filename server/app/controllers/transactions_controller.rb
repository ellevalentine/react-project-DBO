class TransactionsController < ApplicationController

    def index
        @Transactions=Transaction.all 
        render json: @Transactions
    end 

    
end
