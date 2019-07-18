class SavingPotsController < ApplicationController
    
    def index
        @SavingPots=SavingPot.all 
        render json: @SavingPots
    end 

end
