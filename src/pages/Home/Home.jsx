import React from 'react'
import styled from 'styled-components'

import {Statistics, Transactions, Tables} from '../../components'
// import Tables from '../components/Tables'
// import Transactions from '../components/Transactions'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background: #EEF0F8;
`
const Wrapper = styled.div`
padding: 24px 34px;
`

const Cover = styled.div`
display: flex;
padding: 0px 40px;
flex-direction: column;
width: 100%;
`

const Home = () => {
  return (
    <Container>
    <Wrapper>
    <Statistics />
    <Transactions />
    </Wrapper>
    </Container>

  )
}

export default Home