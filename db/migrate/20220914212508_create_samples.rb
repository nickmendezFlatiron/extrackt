class CreateSamples < ActiveRecord::Migration[7.0]
  def change
    create_table :samples do |t|
      t.string :name
      t.string :key
      t.integer :bpm
      t.string :genre
      t.string :type
      t.belongs_to :collection, null: false, foreign_key: true
      t.integer :downloads ,:default => 0

      t.timestamps
    end
  end
end
