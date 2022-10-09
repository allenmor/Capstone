class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :balance, :image
end
