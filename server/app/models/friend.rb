class Friend < ApplicationRecord
  belongs_to :friendlist
  belongs_to :user
end
