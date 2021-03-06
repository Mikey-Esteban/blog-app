module Api
  module V1
    class PostsController < ApplicationController
      protect_from_forgery with: :null_session

      def index
        posts = Post.all.order(created_at: :desc)

        render json: PostSerializer.new(posts, options).serializable_hash.to_json
      end

      def show
        post = Post.find_by(slug: params[:slug])

        render json: PostSerializer.new(post, options).serializable_hash.to_json
      end

      def create
        puts "create was called"
        post = Post.new(post_params)

        if post.save
          render json: PostSerializer.new(post).serializable_hash.to_json
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def update
        post = Post.find_by(slug: params[:slug])

        if post.update(post_params)  # need to add params to update
          render json: PostSerializer.new(post, options).serializable_hash.to_json
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      def destroy
        post = Post.find_by(slug: params[:slug])

        if post.destroy
          head :no_content
        else
          render json: { error: post.errors.messages }, status: 422
        end
      end

      private

      def post_params
        params.require(:post).permit(:title, :image_url, :body)
      end

      def options
        @options ||= { include: %i[comments] }
      end

    end
  end
end
