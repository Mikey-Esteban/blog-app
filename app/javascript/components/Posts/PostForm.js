import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import Navbar from '../Navbar'

const Wrapper = styled.div`
  border: 1px solid #efefef;
  border-radius: 4px;
  width: 800px;
  height: 800px;
  margin: 100px auto;

  color: #14213d;   /* dark blue */

  form {
    margin: 100px auto;
    width: 80%;
  }
`

const Field = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  label, input, textarea {
    margin-top: 10px;
    width: 100%;

    font-size: 20px;
    font-weight: 300;
  }

  input[type='text'], textarea {
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 30px;
    padding-left: 10px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    line-height: 30px;
  }

  textarea {
    height: 300px;
  }

  input[type='submit'] {
    border: 1px solid #fca311;  /* orange */
    border-radius: 4px;
    padding: 10px 20px;

    background: #fff;
    color: #fca311;  /* orange */
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    transition: all ease-in-out 150ms;
  }

  input[type='submit']:hover {
    background: #fca311;  /* orange */
    color: #fff;
  }
`
const Helper = styled.span`

  color: rgb(255, 255, 255);
  font-size: 14px;
  transition: all ease-in-out 200ms;
`

const PostForm = () => {

  const [ post, setPost ] = useState({})
  const [ redirect, setRedirect ] = useState(false)

  const handleChange = e => {
    setPost({...post, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    // use axios to make a post request to /api/v1/posts
    axios.post('/api/v1/posts', {post})
      .then( resp => {
        setPost({})
        setRedirect(true)
      })
      .catch( resp => console.log(resp) )
  }

  const handleMouseOverOrOut = e => {
    const label = e.target.previousSibling
    const helper = label.lastChild
    let color = helper.style.color
    color === '' || color === 'rgb(255, 255, 255)' ? helper.style.color = 'rgb(224, 122, 95)' : helper.style.color = 'rgb(255, 255, 255)'
  }

  if (redirect) {
  return <Redirect to='/'/>;
  }

  return (
    <Fragment>
      <Navbar
        text={'This is the Posts#new view for our app.'}
        linkTo={'/'}
        linkText={'Home'}
      />
      <Wrapper>
        <form onSubmit={handleSubmit} >
          <Field>
            <label htmlFor="title">Title <Helper>If less than 3 characters, title will be generated</Helper></label>
            <input type="text" name="title"
              onMouseOver={handleMouseOverOrOut} onMouseOut={handleMouseOverOrOut}
              onChange={handleChange} value={post.title || ''} placeholder='Attention grabbing title!'/>
          </Field>

          <Field>
            <label htmlFor="image-url">Image <Helper>If left blank, image url will be generated from unsplash.com</Helper></label>
            <input type="text" name="image_url"
              onMouseOver={handleMouseOverOrOut} onMouseOut={handleMouseOverOrOut}
              onChange={handleChange} value={post.image_url || ''} placeholder='Have an image? Link us!'/>
          </Field>

          <Field>
            <label htmlFor="body">Body <Helper>If less than 3 characters, body will be generated</Helper></label>
            <textarea name="body"
              onMouseOver={handleMouseOverOrOut} onMouseOut={handleMouseOverOrOut}
              onChange={handleChange} value={post.body || ''} placeholder='Share your knowledge and expertise'/>
          </Field>

          <Field>
            <input type="submit" value="submit" />
          </Field>

        </form>
      </Wrapper>
    </Fragment>
  )
}

export default PostForm
