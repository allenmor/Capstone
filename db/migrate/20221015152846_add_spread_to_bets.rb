class AddSpreadToBets < ActiveRecord::Migration[7.0]
  def change
    add_column :bets, :spread, :integer
  end
end
