class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.belongs_to :user, foreign_key: true, null: false
      t.belongs_to :chatroom, foreign_key: true, null: false

      t.text :content
      t.boolean :is_deleted, default: false, null: false

      t.timestamps
    end
  end
end
