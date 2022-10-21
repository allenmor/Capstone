class Card < ApplicationRecord
    belongs_to :user
    # validates :name, presence: true
    # validates :number, length: { is: 16 }, presence: true
    # validates :exp, length: { is: 4 }
    # validates :code, length: { is: 3 }
end
