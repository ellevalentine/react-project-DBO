class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :balance, :transactions, :saving_pots, :userstocks
end
