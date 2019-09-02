class User < ApplicationRecord
  has_one :friendlist
  has_many :friends
  has_one :blacklist
  has_many :blocks
  has_many :participants
  has_many :chatrooms, through: :participants
  has_many :user_message_views
  has_many :messages, through: :user_message_views
end
