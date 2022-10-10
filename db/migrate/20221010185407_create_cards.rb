class CreateCards < ActiveRecord::Migration[7.0]
  def change
    create_table :cards do |t|
      t.string :name
      t.string :company
      t.integer :number
      t.integer :exp
      t.integer :code

      t.timestamps
    end
  end
end
