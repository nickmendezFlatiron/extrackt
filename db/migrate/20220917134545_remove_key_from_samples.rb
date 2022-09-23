class RemoveKeyFromSamples < ActiveRecord::Migration[7.0]
  def change
    remove_column :samples, :sample_key, :string
  end
end
