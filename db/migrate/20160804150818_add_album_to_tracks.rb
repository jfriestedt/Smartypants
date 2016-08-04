class AddAlbumToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :album_id, :integer
    add_index :tracks, :album_id
  end
end
