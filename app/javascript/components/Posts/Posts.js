import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Post from './Post'
import Navbar from '../Navbar'

const Home = styled.div`
  margin: 250px auto;
  max-width: 1200px;

  text-align: center;
  color: #14213d;  /* dark blue */
`

const Header = styled.div`
  margin-top: 120px;

  h1 {
    font-size: 44px;
  }
`
const SubHeader = styled.div`
  font-size: 22px;
  font-style: italic;
`

const Grid = styled.div`
  margin-top: 40px;
`

const Posts = () => {

  const [ posts, setPosts ] = useState([])

  useEffect( () => {
    axios.get('/api/v1/posts.json')
      .then( resp => setPosts(resp.data.data) )
      .catch( resp => console.log(resp) )
  }, [posts.length])

  const list = posts.map( item => {
    return( <Post key={item.attributes.title} attributes={item.attributes} /> )
  })

  return (
    <Fragment>
      <Navbar
        text={'This is the Posts#index view of our app.'}
        linkTo={'/posts/new'}
        linkText={'Create Post'}
      />
      <Home>
        <Header>
          <h1>Mikeys Design and Development Blog</h1>
        </Header>
        <SubHeader>
          simple, resourceful, intuitive posts on how to improve as a developer.
        </SubHeader>
        <Grid>{list}</Grid>
      </Home>
    </Fragment>
  )

}

export default Posts
