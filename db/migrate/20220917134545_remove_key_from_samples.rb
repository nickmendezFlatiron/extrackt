class RemoveKeyFromSamples < ActiveRecord::Migration[7.0]
  def change
    remove_column :samples, :key, :string
  end
end
