class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.belongs_to :friendlist, foreign_key: true, null: false
      t.belongs_to :user, foreign_key: true, null: false

      t.timestamp :invitation_accepted_at

      t.timestamps
    end
  end
end
