class Blacklist < ApplicationRecord
  belongs_to :user
  has_many :blocks
end
