class Block < ApplicationRecord
  belongs_to :blacklist
  belongs_to :user

  validate :validation_check

  def validation_check
    if blacklist.user_id == user_id
      errors.add :user_id, "Can't block yourself!"
    end
  end
end