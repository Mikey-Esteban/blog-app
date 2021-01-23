import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Posts from './Posts/Posts'
import Post from './Post/Post'
import NewForm from './Form/NewForm'
import EditForm from './Form/EditForm'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Posts} />
      <Route exact path="/posts/new" component={NewForm} />
      <Route exact path="/posts/:slug" component={Post} />
      <Route exact path="/posts/:slug/edit" component={EditForm} />
    </Switch>
  )
}

export default App
