class AllstocksController < ApplicationController

    def index
        @allstocks = Allstock.all 
        render json: @allstocks
     end

end
