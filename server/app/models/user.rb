class User < ApplicationRecord
    has_many :transactions
    has_many :saving_pots
    has_many :userstocks


    has_secure_password

    # def yearly_transactions
    #     {
    #         2018: [],
    #         2019: []
    #     }
    # end

    # def monthly_transactions
    #     {
    #         jan: [],

    #     }
    # end
end
