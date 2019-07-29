class AddCompanyToTransactions < ActiveRecord::Migration[5.1]
  def change
    add_column :transactions, :company, :string
  end
end
