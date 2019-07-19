class User < ApplicationRecord
    has_many :transactions
    has_many :saving_pots

    has_secure_password
end
