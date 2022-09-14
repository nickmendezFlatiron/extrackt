class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :email, :password_digest, :account_type, :credits
end
