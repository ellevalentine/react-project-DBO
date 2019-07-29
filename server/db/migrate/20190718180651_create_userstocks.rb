class CreateUserstocks < ActiveRecord::Migration[5.1]
  def change
    create_table :userstocks do |t|
      t.string :name
      t.string :ticker
      t.string :type
      t.string :price
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
