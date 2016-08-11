class AddCommentableIdToComments < ActiveRecord::Migration
  def change
    add_column :comments, :commentable_id, :integer
    rename_column :comments, :comment_type, :commentable_type
  end
end
