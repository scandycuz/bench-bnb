class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description
      t.decimal :lat
      t.decimal :lng
      t.timestamps null: false
    end
  end
end
