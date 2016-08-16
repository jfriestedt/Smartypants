class RemoveScoreFromAnnotations < ActiveRecord::Migration
  def change
    remove_column :annotations, :score
  end
end
