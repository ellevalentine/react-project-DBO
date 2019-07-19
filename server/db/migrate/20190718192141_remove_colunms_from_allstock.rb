class RemoveColunmsFromAllstock < ActiveRecord::Migration[5.1]
  def change
    remove_column :allstocks, :type, :string
  end
end
