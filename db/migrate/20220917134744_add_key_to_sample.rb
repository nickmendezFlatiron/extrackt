class AddKeyToSample < ActiveRecord::Migration[7.0]
  def change
    add_column :samples, :key, :string , array: true
  end
end
