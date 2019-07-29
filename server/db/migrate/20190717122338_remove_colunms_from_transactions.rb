class RemoveColunmsFromTransactions < ActiveRecord::Migration[5.1]
  def change
    remove_column :transactions, :year, :integer
    remove_column :transactions, :month, :integer
    remove_column :transactions, :day, :integer
  end
end
