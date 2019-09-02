class Friend < ApplicationRecord
  belongs_to :friendlist
  belongs_to :user
  
  validate :validation_check

  def validation_check
    if friendlist.user_id == user_id
      errors.add :user_id, "Can't friend yourself!"
    end
  end
end
