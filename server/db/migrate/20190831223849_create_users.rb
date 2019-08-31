class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email
      t.string :password
      t.string :username
      t.string :avatar
      t.string :status
      t.boolean :is_active

      t.timestamps
    end
  end
end
