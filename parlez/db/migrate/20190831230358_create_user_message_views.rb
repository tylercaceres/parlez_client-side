class CreateUserMessageViews < ActiveRecord::Migration[5.2]
  def change
    create_table :user_message_views do |t|
      t.integer :user_id
      t.integer :message_id

      t.timestamps
    end
  end
end
