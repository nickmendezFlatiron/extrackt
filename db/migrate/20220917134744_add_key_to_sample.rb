class AddKeyToSample < ActiveRecord::Migration[7.0]
  def change
    add_column :samples, :sample_key, :string , array: true
  end
end
