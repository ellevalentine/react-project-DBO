class CreateSavingPots < ActiveRecord::Migration[5.1]
  def change
    create_table :saving_pots do |t|
      t.string :name
      t.text :description
      t.date :date
      t.integer :goal
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
