class Game < ApplicationRecord
  validates :home_team, presence: true
  validates :away_team, presence: true

  def title
    "#{away_team} at #{home_team}"
  end

  def display_date
    date.strftime("%B %-d, %Y")
  end
end
