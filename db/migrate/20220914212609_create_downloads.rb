class CreateDownloads < ActiveRecord::Migration[7.0]
  def change
    create_table :downloads do |t|
      t.belongs_to :sample, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

    end
  end
end
