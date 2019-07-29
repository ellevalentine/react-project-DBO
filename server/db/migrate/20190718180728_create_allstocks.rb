class CreateAllstocks < ActiveRecord::Migration[5.1]
  def change
    create_table :allstocks do |t|
      t.string :name
      t.string :ticker
      t.string :type
      t.string :price

      t.timestamps
    end
  end
end
