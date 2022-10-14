class BetsController < ApplicationController


    def bets_for_user
        token = request.headers['token']
        user_id = decode(token)
        bets = Bet.where(user_id: user_id)
        render json: bets
    end

    def blackjack_bet
        token = request.headers['token']
        user_id = decode(token)
        bet =  Bet.create(
            game_id: 1,
            user_id: user_id,
            bet_amount: params[:bet_amount].to_i,
            payout: 0
        )
        render json: bet
    end
    def blackjack_double
        token = request.headers['token']
        user_id = decode(token)
        user = User.find_by!(id: user_id)
        user.bets.last.update!(bet_amount: user.bets.last.bet_amount + params[:double_amount])
        render json: user.bets.last
    end
    def blackjack_outcome
        token = request.headers['token']
        user_id = decode(token)
        user = User.find_by!(id: user_id)
        user.bets.last.update!(payout: params[:payout])
        render json: user.bets.last
    end
    def roulette_bet
        token = request.headers['token']
        user_id = decode(token)
        bet =  Bet.create(
            game_id: 2,
            user_id: user_id,
            bet_amount: params[:bet_amount].to_i,
            payout: 0
        )
        render json: bet
    end

    def roulette_won
        token = request.headers['token']
        user_id = decode(token)
        user = User.find_by!(id: user_id)
        user.bets.last.update!(payout: params[:payout])
        render json: user.bets.last
    end
end
