import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
background: #2050F5;
border-radius: 4px;
width: 166px;
height: 50px;
border: none;
color: #FFFFFF;
${'' /* margin-top: 2rem; */}
cursor: pointer;
`

const ButtonFunc = ({value}) => {
  return (
    <Button>{value}</Button>
  )
}

export default ButtonFunc