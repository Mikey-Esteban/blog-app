import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  position: absolute;
  top: 0;
  width: 100%;
`

const LinkWrapper = styled.div`
  a {
    border: 1px solid #14213d;  /* dark blue */
    border-radius: 4px;
    margin-right: 30px;
    padding: 10px 20px;

    color: #14213d;  /* dark blue */
    color: #fff;
    background: #14213d;  /* dark blue */
    text-decoration: none;

    transition: all ease-in-out 150ms;
  }

  a:hover {
    color: #14213d;  /* dark blue */
    background: #fff;
  }
`

const Navbar = (props) => {
  const { text, linkTo, linkText } = props
  
  return (
    <Wrapper>
      <span>{text}</span>
      <LinkWrapper>
        <Link to={linkTo}>{linkText}</Link>
      </LinkWrapper>
    </Wrapper>
  )
}

export default Navbar
