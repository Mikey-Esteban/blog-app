class Post < ApplicationRecord
  has_many :comments

  before_create :slugify

  def slugify
    self.slug = title.parameterize
  end

  def total_comments
    comments.length
  end
end
