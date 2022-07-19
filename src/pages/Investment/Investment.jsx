import React from 'react'
import styled from 'styled-components'
import {InvestmentStat, Transactions} from '../../components'

// import Table1 from '../components/Table1.tsx'
// import Transactions from '../components/Transactions'

const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
background: #EEF0F8;
`
const Wrapper = styled.div`
padding: 0 34px;
`

const Cover = styled.div`
display: flex;
padding: 0px 40px;
flex-direction: column;
width: 100%;
`

const Investment = () => {
  return (
    <Container>
    <Wrapper>
    <InvestmentStat />
    <Transactions />
    </Wrapper>
    </Container>

  )
}

export default Investment