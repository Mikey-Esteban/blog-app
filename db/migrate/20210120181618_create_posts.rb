class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.string :image_url
      t.string :body
      t.string :slug

      t.timestamps
    end
  end
end
