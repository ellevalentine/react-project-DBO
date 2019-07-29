class CreateTransactions < ActiveRecord::Migration[5.1]
  def change
    create_table :transactions do |t|
      t.integer :user_id
      t.integer :year
      t.integer :month
      t.integer :day
      t.integer :amount
      t.string :spendingSection

      t.timestamps
    end
  end
end
