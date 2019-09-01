class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.belongs_to :friendlist, foreign_key: true

      t.integer :friendlist_id
      t.integer :user_id
      t.timestamp :invitation_accepted_at

      t.timestamps
    end
  end
end
