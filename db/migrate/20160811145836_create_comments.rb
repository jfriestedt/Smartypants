class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      # t.integer :commentable_id, null: false
      t.string :comment_type, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

    add_index :comments, :author_id
  end
end
