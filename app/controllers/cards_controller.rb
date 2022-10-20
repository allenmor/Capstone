class CardsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response 
    # USER ADDS NEW CARD AND DEPOSITS

    $companys = ['visa', 'mastercard', 'amex', 'discover']
    def create 
        token = request.headers['token']
        user_id = decode(token)
        card = Card.create!(
            name: params[:name],
            company: $companys.sample,
            number: params[:number].to_i,
            exp: params[:exp].to_i,
            code: params[:code].to_i,
            user_id: user_id
        )

        user = User.find_by!(id: user_id)
        user.update(balance: User.find_by!(id: user_id).balance + params[:amount].to_i)

        render json: user
    end
    def user_withdraw_cards 
        token = request.headers['token']
        user_id = decode(token)
        card = Card.create!(
            name: params[:name],
            company: params[:company],
            number: params[:number].to_i,
            exp: params[:exp].to_i,
            code: params[:code].to_i,
            user_id: user_id
        )

        if card 
            user = User.find_by!(id: user_id)
            user.update(balance: User.find_by!(id: user_id).balance - params[:amount].to_i)
    
            render json: user
        else
            render_unprocessable_entity_response
        end
    end


    # USERS EXISTING CARDS
    def user_cards
        token = request.headers['token']
        user_id = decode(token)
        user = User.find_by!(id: user_id)
        render json: user.cards
    end

    private

def render_unprocessable_entity_response(invalid)
    render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
  end
  def render_not_found_response(exception)
    render json: { error: "#{exception.model} not found" }, status: :not_found
  end
end
