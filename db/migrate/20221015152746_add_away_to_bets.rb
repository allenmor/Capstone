class AddAwayToBets < ActiveRecord::Migration[7.0]
  def change
    add_column :bets, :away, :string
  end
end
