class ChangeTracksAlbumToString < ActiveRecord::Migration
  def change
    remove_column :tracks, :album_id
    add_column :tracks, :album, :string
  end
end
