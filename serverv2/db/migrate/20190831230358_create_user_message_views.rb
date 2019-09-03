class CreateUserMessageViews < ActiveRecord::Migration[5.2]
  def change
    create_table :user_message_views do |t|
      t.belongs_to :user, foreign_key: true, null: false
      t.belongs_to :message, foreign_key: true, null: false

      t.timestamps
    end
  end
end
