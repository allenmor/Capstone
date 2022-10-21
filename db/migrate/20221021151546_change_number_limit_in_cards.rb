class ChangeNumberLimitInCards < ActiveRecord::Migration[7.0]
  def change
    change_column :cards, :number, :integer, limit: 8
  end 
end
