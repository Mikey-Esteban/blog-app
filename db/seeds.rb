require 'faker'

def grab_sentence
  sentence = Faker::Lorem.sentence(word_count: 3, supplemental: true, random_words_to_add: 10)
  sentence
end

def grab_paragraph
  paragraph = ''
  rand(1...8).times do
    paragraph += "#{grab_sentence} "
  end
  paragraph
end

def grab_blog
  blog = ''
  rand(2...6).times do
    blog += "#{grab_paragraph}\n"
  end
  blog
end

workspace_photo = Unsplash::Photo.find("hGV2TfOh0ns")['urls']['regular']
text_editor_photo = Unsplash::Photo.find("_yBEyYR8wps")['urls']['regular']
pomodoro_photo = Unsplash::Photo.find("vcPtHBqHnKk")['urls']['regular']

posts = Post.create([
  {
    title: 'Do You Have An Optimized Workspace?',
    image_url: workspace_photo,
    body: grab_blog
  },
  {
    title: 'Why Your Text Editor Matters',
    image_url: text_editor_photo,
    body: grab_blog
  },
  {
    title: "The Pomodoro Technique, It'll Change Your Life",
    image_url: pomodoro_photo,
    body: grab_blog
  }
])

comments = Comment.create([
  {
    text: grab_sentence,
    post: posts.first
  },
  {
    text: grab_sentence,
    post: posts.first
  },
  {
    text: grab_sentence,
    post: posts.first
  }
])
