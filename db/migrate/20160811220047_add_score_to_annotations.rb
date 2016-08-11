class AddScoreToAnnotations < ActiveRecord::Migration
  def change
    add_column :annotations, :score, :integer, null: false, default: 0
  end
end
