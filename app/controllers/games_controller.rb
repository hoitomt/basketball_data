class GamesController < ApplicationController
  def index
    @games = Game.all
    respond_to do |format|
      format.html
      format.json { render json: @games }
    end
  end

  def new
    @game = Game.new
  end

  def show
    @game = Game.find(params[:id])
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      redirect_to games_path
    else
      render :new
    end
  end

  private

  def game_params
    params.require(:game).permit(:date, :home_team, :away_team, :description)
  end
end
