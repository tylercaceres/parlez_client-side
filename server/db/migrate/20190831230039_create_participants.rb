class CreateParticipants < ActiveRecord::Migration[5.2]
  def change
    create_table :participants do |t|
      t.belongs_to :user, foreign_key: true, null: false
      t.belongs_to :chatroom, foreign_key: true, null: false


      t.boolean :is_active, default: true, null: false
      t.boolean :is_admin, default: false, null: false

      t.timestamps
    end
  end
end
