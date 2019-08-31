class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.integer :user_id
      t.integer :chatroom_id
      t.text :content
      t.boolean :is_deleted

      t.timestamps
    end
  end
end
