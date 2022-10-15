class AddPendingToBets < ActiveRecord::Migration[7.0]
  def change
    add_column :bets, :pending, :boolean
  end
end
