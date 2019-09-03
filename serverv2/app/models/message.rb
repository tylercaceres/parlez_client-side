class Message < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom
  has_many :user_message_views
  has_many :users, through: :user_message_views
end
