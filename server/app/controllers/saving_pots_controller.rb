class SavingPotsController < ApplicationController
    
    def index
        @SavingPots=SavingPot.all 
        render json: @SavingPots
    end 

    def createPot

        @SavingPot = SavingPot.create(name: params[:name] , description: params[:description], goal: params[:goal], date: params[:date],  user_id: params[:user_id] )
        render json: SavingPot.where(user_id: params[:user_id])

    end 

    def show

        @SavingPot = SavingPot.find(params[:id])
        render json: @SavingPot
    
    end

    def deletePot

        @SavingPot = SavingPot.find(params[:id])
        @SavingPot.delete
        render json: @SavingPot

    end


end
