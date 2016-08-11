class AddNullConstraintToCommentableIdInComments < ActiveRecord::Migration
  def change
    change_column_null :comments, :commentable_id, false
  end
end
