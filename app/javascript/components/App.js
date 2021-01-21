import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import PostForm from './Posts/PostForm'
import Post from './Post/Post'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/new" component={PostForm} />
      <Route exact path="/posts/:slug" component={Post} />
    </Switch>
  )
}

export default App
