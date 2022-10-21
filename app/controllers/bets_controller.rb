class BetsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 

    def bets_for_user
        token = request.headers['token']
        user_id = decode(token)
        bets = Bet.where(user_id: user_id, pending: nil)
        render json: bets
    end

    def pending_bets 
        token = request.headers['token']
        user_id = decode(token)
        bets = Bet.where(user_id: user_id, pending: true)
        render json: bets
    end

    def blackjack_bet
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
            game_id: 3,
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


    def sports_bet 
        token = request.headers['token']
        user_id = decode(token)
        bet = Bet.create!(
            game_id: params[:game_id],
            user_id: user_id,
            bet_amount: params[:bet_amount].to_i,
            payout: params[:payout],
            pending: params[:pending],
            home: params[:home],
            away: params[:away],
            spread: params[:spread].to_i
        )
        if bet 

            render json: bet
        else
            render_not_found_response
        end
    end
    private 
    def render_unprocessable_entity_response(invalid)
        render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
      def render_not_found_response(exception)
        render json: { error: "#{exception.model} not found" }, status: :not_found
      end
end
