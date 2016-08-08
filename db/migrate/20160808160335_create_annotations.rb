class CreateAnnotations < ActiveRecord::Migration
  def change
    create_table :annotations do |t|
      t.integer :author_id, null: false;
      t.integer :track_id, null: false;
      t.text :body, null: false;
      t.integer :referent_start_index, null: false;
      t.integer :refernt_end_index, null: false;

      t.timestamps null: false
    end

    add_index :annotations, :author_id
    add_index :annotations, :track_id
  end
end
