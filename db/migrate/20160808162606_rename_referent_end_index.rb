class RenameReferentEndIndex < ActiveRecord::Migration
  def change
    rename_column :annotations, :refernt_end_index, :referent_end_index
  end
end
