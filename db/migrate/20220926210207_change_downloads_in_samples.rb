class ChangeDownloadsInSamples < ActiveRecord::Migration[7.0]
  def change
    rename_column :samples, :downloads, :download_count
  end
end
