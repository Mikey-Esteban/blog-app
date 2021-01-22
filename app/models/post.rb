class Post < ApplicationRecord
  has_many :comments

  validates :title, presence: true
  validates :body, presence: true

  before_create :slugify, :check_image_url, :check_title, :check_body

  def slugify
    self.slug = title.parameterize
  end

  def check_image_url
    if image_url.nil?
      random = Unsplash::Photo.random(query: 'programming', orientation: 'landscape')['urls']['regular']
      self.image_url = random
    end
  end

  def check_title
    if title.length < 3
      title = Faker::Hipster.sentence(word_count: 3, supplemental: true, random_words_to_add: 4)
      self.title = title
    end
  end

  def check_body
    if body.length < 3
      body = ''
      rand(3...10).times do
        paragraph = Faker::Hipster.paragraph(sentence_count: 2, supplemental: true, random_sentences_to_add: 6)
        paragraph += "\n"
        body += paragraph
      end
      self.body = body
    end
  end

end
