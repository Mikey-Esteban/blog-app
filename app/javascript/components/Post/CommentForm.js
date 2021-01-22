import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border: 1px solid #efefef;
  border-radius: 4px;
  height: 250px;
  margin: 0 auto;

  color: #14213d;   /* dark blue */

  form {
    margin: 0 auto;
    width: 80%;
  }
`

const Field = styled.div`
  margin: 30px auto 0 auto;
  padding: 10px 0;
  label, textarea {
    margin-top: 10px;
    width: 100%;

    font-size: 20px;
    font-weight: 300;
  }

  textarea {
    border: 1px solid #efefef;
    border-radius: 4px;
    height: 60px;
    line-height: 30px;
    padding-left: 10px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
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

const CommentForm = (props) => {
  return (
    <Wrapper>
      <form onSubmit={props.handleSubmit}>
        <Field>
          <label htmlFor="text">Share us your thoughts!</label>
          <textarea name="text" onChange={props.handleChange}
             value={props.comment.text || ''} placeholder="I learn something new everyday!"/>
        </Field>

        <Field>
          <input type="submit" value="Add Comment"/>
        </Field>
      </form>
    </Wrapper>
  )
}

export default CommentForm
