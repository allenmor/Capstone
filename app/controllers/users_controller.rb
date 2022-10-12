class UsersController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    # GET /users
    def index
      @users = User.all
  
      render json: @users
    end
  
    # GET /users/1
    def show
      render json: @user
    end
  
    # LOGIN
    def login
      user = User.find_by(name: params[:name]).try(:authenticate, params[:password])
  
      if user 
        token = encode(user.id)
        
        render json: {user: user, token: token}
      else
        render json: { message: 'wrong'}
      end
      # render json: user
    end
  
    # get profile
    def me
      token = request.headers['token']
      user_id = decode(token)
      user = User.find(user_id)
      render json: user
    end
  
    # POST /users
    def create
      user = User.create!(
          name: params[:name],
          password: params[:password],
          image: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg",
          balance: 0
      )
      token = encode(user.id)
      render json: {user: user, token: token}
    end
  
    # PATCH/PUT /users/1
    def update
      if @user.update(user_params)
        render json: @user
      else
        render json: @user.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /users/1
    def destroy
      @user.destroy
    end

    def add_money 
      token = request.headers['token']
      user_id = decode(token)
      user = User.find_by!(id: user_id)
      user.update(balance: user.balance + params[:balance].to_i)
      render json: user
    
  end
    def withdraw_money 
      token = request.headers['token']
      user_id = decode(token)
      user = User.find_by!(id: user_id)
      user.update(balance: user.balance - params[:balance].to_i)
      render json: user
    
  end

  # MINUS BALANCE
  def blackjack_start
    token = request.headers['token']
    user_id = decode(token)
    user = User.find_by!(id: user_id)
    user.update(balance: user.balance - params[:balance].to_i)
    render json: user
  end

  # PLUS BALANCE 
  def blackjack_finish
    token = request.headers['token']
    user_id = decode(token)
    user = User.find_by!(id: user_id)
    user.update(balance: user.balance + params[:balance].to_i)
    render json: user
  end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_user
        @user = User.find(params[:id])
      end
  
      # Only allow a list of trusted parameters through.
      def user_params
        params.require(:user).permit(:name, :password_digest, :balance, :image)
      end

      def render_unprocessable_entity_response(invalid)
          render json: {error: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
end
