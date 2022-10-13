class CreateBets < ActiveRecord::Migration[7.0]
  def change
    create_table :bets do |t|
      t.integer :game_id
      t.integer :user_id
      t.integer :bet_amount
      t.integer :payout

      t.timestamps
    end
  end
end
