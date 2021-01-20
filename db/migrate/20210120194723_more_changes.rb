class MoreChanges < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :email, :string, null: false
    remove_column :users, :username
    add_index :users, :email, unique: true 
  end
end
