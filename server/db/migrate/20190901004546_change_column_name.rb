class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :chatrooms, :type, :chatroom_type
  end
end
