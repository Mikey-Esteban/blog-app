import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.div `

  h1 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: .1em;
  }
`
const Body = styled.div`
  font-size: 16px;
  font-style: italic;
  font-weight: 300;
  line-height: 1.5em;
`

const Comments = (props) => {

  const [ comments, setComments ] = useState([])

  useEffect( () => {
    const comments_array = props.attributes
    const comments = comments_array.map( item => {
      return <p key={item.id}>{item.attributes.text}</p>
    })
    setComments(comments)
  }, [comments.length])

  return (
    <div>
      <Title><h1>Comments</h1></Title>
      <Body>{comments}</Body>
    </div>
  )
}

export default Comments
