class CreateTracks < ActiveRecord::Migration
  def change
    create_table :tracks do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.string :image_file_name
      t.string :image_content_type
      t.integer :image_file_size
      t.datetime :image_updated_at
      t.text :lyrics, null: false
      t.integer :submitter_id

      t.timestamps null: false
    end

    add_index :tracks, :submitter_id
    add_index :tracks, [:title, :artist], unique: true
  end
end
