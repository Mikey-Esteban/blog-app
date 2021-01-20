class CommentSerializer
  include JSONAPI::Serializer
  attributes :text, :post_id
end
