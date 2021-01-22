class Post < ApplicationRecord
  has_many :comments

  before_create :slugify, :check_image_url

  def slugify
    self.slug = title.parameterize
  end

  def check_image_url
    if image_url.nil?
      random = Unsplash::Photo.random(query: 'programming', orientation: 'landscape')['urls']['regular']
      self.image_url = random
    end
  end

  def total_comments
    comments.length
  end
end
