class Block < ApplicationRecord
  belongs_to :blacklist
  belongs_to :user
end
