class CreateFriendlists < ActiveRecord::Migration[5.2]
  def change
    create_table :friendlists do |t|
      t.integer :user_id

      t.timestamps
    end
  end
end
