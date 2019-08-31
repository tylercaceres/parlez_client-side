class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.integer :friendlist_id
      t.integer :user_id
      t.timestamp :invitation_sent_at
      t.timestamp :invitation_accepted_at

      t.timestamps
    end
  end
end
