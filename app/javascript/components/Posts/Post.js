import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  border: 1px solid #e5e5e5;
  border-radius: 4px;
  width: 800px;
  margin: 30px auto;
`

const ImageWrapper = styled.div`
  img {
    width: 400px;
    height: 100%;
  }
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px 40px;
  text-align: center;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
`

const Teaser = styled.div`
  font-weight: 300;
  color: #8d99ae;  /* blue gray */
`

const LinkWrapper = styled.div`
  a {
    border: 1px solid #fca311 ; /* orange*/
    border-radius: 4px;
    padding: 10px 20px;

    color: #fca311;
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    color: #fff;
    background: #fca311;
  }
`

const Post = (props) => {

  const teaser = `${props.attributes.body.substring(0, 75)}...`

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={props.attributes.image_url} alt={props.attributes.title}/>
      </ImageWrapper>
      <MainWrapper>
        <Title>{props.attributes.title}</Title>
        <Teaser>{teaser}</Teaser>
        <LinkWrapper><Link to={`posts/${props.attributes.slug}`}>View post</Link></LinkWrapper>
      </MainWrapper>
    </Wrapper>
  )
}

export default Post
