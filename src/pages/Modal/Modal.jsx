import { Close } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {useDispatch} from 'react-redux'
import {closeModal} from '../../features/dash/dashSlice'


const Overlay = styled.div`
height: 100vh;
width: 100%;
${'' /* overflow: hidden; */}
top: 0;
left: 0;
bottom: 0;
right: 0;
background: rgba(0, 0, 0, 0.8);
z-index: 999999999999999999999999999;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden !important;
`
const ModalBox = styled.div`
position: absolute;
width: 436px;
height: 310px;
top: 50%;  
    left: 50%; 
    transform: translate(-50%, -50%);
background: #FFFFFF;
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
`
const H2 = styled.h2`

`
const Text = styled.p`
color: gray;
`
const Button = styled.button`
background: #2050F5;
border-radius: 4px;
width: 166px;
height: 50px;
border: none;
color: #FFFFFF;
margin-top: 2rem;
`

const Div = styled.div`
margin-top: 1.5rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`


const Modal = () => {

const dispatch = useDispatch();

  return (
    <Overlay>
    <ModalBox>
    <Div>
    <Close style={{cursor: 'pointer', width: '10%', background: 'white', marginLeft: '22rem'}} onClick={() => dispatch(closeModal())}  />
    <H2>Log Out</H2>
    <Text>Are you sure you want to log out ?</Text>
    <Button>Continue</Button>
    </Div>
    </ModalBox>
    </Overlay>
  )
}

export default Modal