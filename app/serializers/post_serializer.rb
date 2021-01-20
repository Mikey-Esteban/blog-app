class PostSerializer
  include JSONAPI::Serializer
  attributes :title, :image_url, :body, :slug

  has_many :comments
end
