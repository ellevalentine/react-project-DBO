class AddColunmToTransactions < ActiveRecord::Migration[5.1]
  def change
    add_column :transactions, :date, :string
  end
end
