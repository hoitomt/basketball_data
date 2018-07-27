class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.string :description
      t.string :home_team
      t.string :away_team
      t.date   :date

      t.timestamps
    end
  end
end
