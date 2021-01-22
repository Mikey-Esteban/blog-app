import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Navbar from '../Navbar'
import Main from './Main'
import Comments from './Comments'
import CommentForm from './CommentForm'

const CommentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 600px 1fr;

  margin-bottom: 120px;
`

const Post = (props) => {

  const [ post, setPost ] = useState({})
  const [ comment, setComment ] = useState({})
  const [ loaded, setLoaded ] = useState(false)

  useEffect( () => {
    const slug = props.match.params.slug
    axios.get(`/api/v1/posts/${slug}`)
      .then( resp => {
        setPost(resp.data)
        setLoaded(true)
      })
      .catch( resp => console.log(resp))
  }, [])

  const handleChange = e => {
    setComment({...comment, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const post_id = post.data.id

    axios.post('/api/v1/comments', {comment, post_id})
      .then( resp => {
        const included = [...post.included, resp.data.data]
        setPost({...post, included})
        setComment({})
      })
      .catch( resp => console.log(resp))
  }

  return (
    <Fragment>
      <Navbar
        text={'This is the Posts#show view for our app.'}
        linkTo={'/'}
        linkText={'Home'}
      />
      {
        loaded &&
        <Fragment>
          <Main attributes={post.data.attributes} />
          <CommentsWrapper>
            <div className="column"></div>
            <Comments attributes={post.included} />
            <CommentForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              comment={comment}
            />
          </CommentsWrapper>
        </Fragment>
      }
    </Fragment>
  )
}

export default Post
