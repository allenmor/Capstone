class BetSerializer < ActiveModel::Serializer
  attributes :id, :bet_amount, :payout, :updated_at, :add_game_name, :pending

  def add_game_name 
    object.game
  end

end
