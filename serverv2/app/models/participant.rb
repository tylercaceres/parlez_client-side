class Participant < ApplicationRecord
  belongs_to :user
  belongs_to :chatroom

  # def self.active
  #   where({is_active:true})
  # end

  # def self.admin
  #   where({is_admin:true})
  # end

end
