class AddHomeToBets < ActiveRecord::Migration[7.0]
  def change
    add_column :bets, :home, :string
  end
end
