import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 120px auto 40px auto;
  width: 800px;

  color: #14213d;  /* dark blue */
`
const Title = styled.div`
  text-align: center;

  h1 {
    font-size: 44px;
    font-weight: 500;
    letter-spacing: .1em;
  }
`

const ImageWrapper = styled.div`
  img {
    display: block;
    margin: 40px auto;
    height: auto;
    width: 600px;
  }
`
const Body = styled.div`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5em;
`

const Main = (props) => {
  console.log('Main props:', props)

  const [ paragraphs, setParagraphs ] = useState([])

  useEffect( () => {
    const text = props.attributes.body
    const text_array = text.split('\n')
    const paragraphs = text_array.map( (text, index) => {
      return <p key={index}>{text}</p>
    })
    setParagraphs(paragraphs)
  }, [])

  return (
    <Wrapper>
      <Title>
        <h1>{props.attributes.title}</h1>
      </Title>
      <ImageWrapper>
        <img src={props.attributes.image_url} alt={props.attributes.title}/>
      </ImageWrapper>
      <Body>{paragraphs}</Body>
    </Wrapper>
  )
}

export default Main
