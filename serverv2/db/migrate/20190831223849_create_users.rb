class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.string :avatar
      t.string :status
      t.boolean :is_active, default: true, null: false

      t.timestamps
    end
  end
end
