class CardsController < ApplicationController

    def create 
        token = request.headers['token']
        user_id = decode(token)
        card = Card.create(
            name: params[:name],
            company: params[:company],
            number: params[:number].to_i,
            exp: params[:exp].to_i,
            code: params[:code].to_i,
            user_id: user_id
        )

        user = User.find_by!(id: user_id)
        user.update(balance: User.find_by!(id: user_id).balance + params[:amount].to_i)

        render json: card
    end

    private
end
