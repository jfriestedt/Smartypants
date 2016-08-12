class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer "value", null: false
      t.integer "voter_id", null: false
      t.integer "annotation_id", null: false

      t.timestamps null: false
    end

    add_index :votes, :annotation_id
    add_index :votes, [:value, :voter_id, :annotation_id], unique: true
  end
end
