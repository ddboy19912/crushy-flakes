import React from 'react'
import styled from 'styled-components'
import {KeyboardArrowDown, Timeline} from '@material-ui/icons'
import iconA from '../../../src/images/iconA.png'
import iconB from '../../../src/images/iconB.png'
import iconC from '../../../src/images/iconC.png'
import iconD from '../../../src/images/iconD.png'


const Container = styled.div`
display: flex;
${'' /* flex-wrap: wrap; */}
align-items: center;
justify-content: center;
margin-top: 2rem !important;
width: 100%;
height: 141.58px;
${'' /* background: red; */}
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0 auto;
width: 100%;
height: 100%;

`

const Title = styled.h2`
`
const ValueTitle = styled(Title)`
font-size: 26px;
font-weight: 800;
`
const Text = styled.p`
display: flex;
align-items: center;
`
const TextVal = styled(Text)`
font-size: 17.32px;
font-weight: 400;
`
const PercentVal = styled(Text)`
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
display: flex;
align-items: center;
color: ${(props) => props.percent ? 'green' : 'red'};
`


const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
${'' /* background: red; */}
width: 100%;
${'' /* margin-right: 1.2rem; */}
height: 100%;
`
const Items = styled.div`
display: flex;
gap: 1rem;
align-items: center;
${'' /* min-width: 300px; */}
${'' /* max-width: 300px !important; */}
width: 100% !important;
height: inherit;
background: #FFFFFF;
`
const Values = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`
const Date = styled.div`
display: flex;
align-items: center;
width: 100%;
color: gray;
margin-left: 1rem;
${'' /* margin-right: 0.4rem; */}
${'' /* background-color: red; */}
font-size: 13px;
`


// const Div = styled.div`
// `



const InvestmentStat = () => {

const [percent, setPercent] = React.useState(true)



  return (
    <Container>
        <Wrapper>
            <Content>
<Items>
<img src={iconA} alt="alt" style={{maxWidth: '100px'}} />
    <Values>
   <ValueTitle>1,478,286</ValueTitle>
   <TextVal style={{marginTop: '-17px'}}>Total tokens</TextVal>
   <PercentVal style={{marginTop: '-10px'}} percent={percent}  ><Timeline style={{fontSize: '14px'}}/>4.07%<Date>Last Month<KeyboardArrowDown/></Date></PercentVal>
    </Values>
</Items>

<Items>
<img src={iconB} alt="alt" style={{width: '100px'}} />
    <Values>
   <ValueTitle>N478,520</ValueTitle>
   <TextVal style={{marginTop: '-17px'}}>Total Revenue</TextVal>
   <PercentVal style={{marginTop: '-10px'}}><Timeline style={{fontSize: '14px'}}/>0.24%<Date>Last Month<KeyboardArrowDown/></Date></PercentVal>
    </Values>
</Items>

<Items>
<img src={iconC} alt="alt" style={{width: '100px'}} />
    <Values>
   <ValueTitle>154,872</ValueTitle>
   <TextVal style={{marginTop: '-17px'}}>Total Users</TextVal>
   <PercentVal style={{marginTop: '-10px'}}><Timeline style={{fontSize: '14px'}}/>1.64%<Date>Last Month<KeyboardArrowDown/></Date></PercentVal>
    </Values>
</Items>

<Items>
<img src={iconD} alt="alt" style={{width: '100px'}} />
    <Values>
   <ValueTitle>167</ValueTitle>
   <TextVal style={{marginTop: '-17px'}}>Total Subscriptions</TextVal>
   <PercentVal style={{marginTop: '-10px'}}><Timeline style={{fontSize: '14px'}}/>0.00%<Date>Last Month<KeyboardArrowDown/></Date></PercentVal>
    </Values>
</Items>
            </Content>
        </Wrapper>
    </Container>
  )
}

export default InvestmentStat