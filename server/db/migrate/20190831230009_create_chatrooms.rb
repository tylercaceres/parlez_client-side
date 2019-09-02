class CreateChatrooms < ActiveRecord::Migration[5.2]
  def change
    create_table :chatrooms do |t|
      t.string :chatroom_type, null: false
      t.string :name, null: false
      t.string :avatar

      t.timestamps
    end
  end
end
