class CreateRoutes < ActiveRecord::Migration[5.2]
  def change
    create_table :routes do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.float :start_long, null: false
      t.float :start_lat, null: false
      t.float :end_long, null: false
      t.float :end_lat, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :routes, :user_id

  end
end
