class User < ApplicationRecord
    has_secure_password
    has_many :cards
    has_many :bets
    has_many :games, through: :bets
    validates :name, presence: true, uniqueness: true
end
