class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :full_name
      t.string :email
      t.string :password_digest
      t.string :account_type , default: "free"
      t.integer :credits , default: 0

      t.timestamps
    end
  end
end
