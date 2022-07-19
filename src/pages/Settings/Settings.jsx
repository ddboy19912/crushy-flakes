import React from 'react'
import styled from 'styled-components'
import {SearchSup} from '../../components'
import SettingsContent from './SettingsContent'

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

const Settings = () => {
  return (
    <Container>
    <Wrapper>
<SearchSup />
<SettingsContent />
    </Wrapper>
    </Container>
  )
}

export default Settings