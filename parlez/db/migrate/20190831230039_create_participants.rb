class CreateParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :participants do |t|
      t.integer :user_id
      t.integer :chatroom_id
      t.boolean :is_active
      t.boolean :is_admin

      t.timestamps
    end
  end
end
