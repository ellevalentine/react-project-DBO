class AddColunmToAllstock < ActiveRecord::Migration[5.1]
  def change
    add_column :allstocks, :sector, :string
  end
end
