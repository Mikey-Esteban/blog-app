import styled from 'styled-components'

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

export { Wrapper, Field, Helper }
