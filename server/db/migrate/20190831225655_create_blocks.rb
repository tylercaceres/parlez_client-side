class CreateBlocks < ActiveRecord::Migration[5.2]
  def change
    create_table :blocks do |t|
      t.belongs_to :blacklist, foreign_key: true, null: false
      t.belongs_to :user, foreign_key: true, null: false

      t.timestamps
    end
  end
end
