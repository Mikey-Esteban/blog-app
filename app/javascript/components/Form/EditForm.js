import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import Navbar from '../Navbar'
import { Wrapper, Field, Helper } from './Styles.js'

const EditForm = (props) => {

  const [ post, setPost ] = useState({})
  const [ loaded, setLoaded ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)

  useEffect( () => {
    const slug = props.match.params.slug
    axios.get(`/api/v1/posts/${slug}`)
      .then( resp => {
        setPost(resp.data.data.attributes)
        setLoaded(true)
      })
      .catch( resp => console.log(resp))
  }, [])

  const handleChange = e => {
    setPost({...post, [e.target.name]:e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    // use axios to make a patch request to /api/v1/posts/:slug
    const slug = props.match.params.slug
    axios.put(`/api/v1/posts/${slug}`, { post:post })
      .then( resp => {
        debugger
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
      {
        loaded &&
        <Fragment>
          <Navbar
            text={'This is the Posts#edit view for our app.'}
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
      }
    </Fragment>
  )
}

export default EditForm
