class CreateGameLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :game_logs do |t|
      t.integer :player_number
      t.integer :game_id
      t.string  :message

      t.timestamps
    end
  end
end
