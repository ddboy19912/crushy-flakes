import React, {useState} from 'react'
import styled from 'styled-components'
import SelectData from './SelectData.tsx'
import {Checkbox, RadioButton, SwitchSlide} from '../../components'
import { Help } from '@material-ui/icons'


const Container = styled.div`
display: flex;
margin-top: 24px;
width: 100%;
min-height: 1071px;
background: #FFFFFF;
border: 0.5px solid #E1E5E4;
box-shadow: 0px 0px 30px rgba(122, 128, 126, 0.1);
border-radius: 4px;
${'' /* background: green; */}
`
const Wrapper = styled.div`
display: flex;
padding: 0px 40px;
padding-left: 0.7rem !important;
width: 100%;
height: 100%;
${'' /* background: red; */}
${'' /* max-height: 500px !important; */}
gap: 1.5rem;
${'' /* margin-top: 1.5rem; */}
`
const Left = styled.div`
display: flex;
flex-direction: column;
max-width: 294px;
height: 820px;
padding-top: 2rem;
background-color: white;
border: 1px solid #F2F0F0;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
display: flex;
${'' /* align-items: center; */}
${'' /* justify-content: center; */}
`

const Item = styled.h2`
font-size: 18px;
font-weight: ${(props) => (props.selected !== props.index ? 300 : 800)};
${'' /* color: ${(props) => (props.selected !== props.index ? 'green' : 'red')}; */}
margin-left: 1.7rem;
margin-top: 1.7rem;
cursor: pointer;
transition: 0.1s ease-in-out;
&:hover {
  font-weight: 800;
}
`
const H2 = styled.h2`
margin-bottom: 1.5rem;
`

const H3 = styled.h3`
display: flex;
align-items: center;
gap: 0.5rem;
`

const Right = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
margin-top: 2rem;
${'' /* background-color: blue; */}
width: 100%;
`
const TopRight = styled.div`
background: white;
width: 100%;
min-height: 493px;
border-radius: 10px;
border: 1px solid #F2F0F0;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`
const TopRightContent = styled.div`
margin-left: 2rem;
${'' /* background: orange; */}
height: 80%;
`

const BottomRight = styled.div`
background: white;
width: 100%;
height: 493px;
border-radius: 10px;
border: 1px solid #F2F0F0;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`

const BottomRightContent = styled.div`
margin-left: 2rem;
margin-top: 2rem;
`

// const Select = styled.select`
// width: 100%;
//   height: 35px;
//   background: white;
//   color: gray;
//   padding-left: 5px;
//   font-size: 14px;
//   ${'' /* border: none; */}
//   margin-left: 10px;

//   option {
//     color: black;
//     background: white;
//     display: flex;
//     white-space: pre;
//     min-height: 20px;
//     padding: 0px 2px 1px;
//   }
// `

const Div = styled.div`

`

const SwitchText1 = styled(Div)`
display: flex;
border-bottom: 1px solid  #F2F0F0;
`
const ColText = styled.div`

`

const SettingsData = [
  {
name: 'Date & Time',
},
{
  name: 'Preference',
},
{
name: 'Account',
},
{
name: 'Notifications',
},
];


const SettingsContent = () => {

const [selected, setSelected] = useState(null)

  return (
    <Container>
    <Wrapper>
    <Left>
<img src="https://i.ibb.co/wYL9KQj/settings-Auth.png" alt="settings" style={{maxWidth: '270px', maxHeight: '130.68px', background: '#E1E9FD', marginBottom: '1.5rem'}}/>
{SettingsData.map((item, index) => {
  return <Item key={index} index={index} selected={selected} setSelected={setSelected}  onClick={() => setSelected(index)} >{item.name}</Item>
})}
    </Left>
    <Right>
<TopRight>
<TopRightContent>
<H2>Date & Time</H2>

<H3 style={{marginTop: '2rem', marginBottom: '0.7rem'}}>Timezone</H3>

<SelectData />

<Checkbox label="Notify me of timezone changes" />
 
<H3 style={{marginBottom: '0rem'}} >Start of Calender Week</H3>
<RadioButton label1='Sunday' label2='Monday'/>

<H3 style={{marginBottom: '0rem'}}>Time Format</H3>
<RadioButton label1='12 hour' label2='24 hour'/>

<H3 style={{marginBottom: '0rem'}}>Date Format</H3>
<RadioButton label1='mm/dd/yy' label2='dd/mm/yy'/>

</TopRightContent>
</TopRight>
<BottomRight>
<BottomRightContent>
<H2>Preferences</H2>
<SwitchText1>
<SwitchSlide label='' />
<ColText>
<H3 >Flyout Toast Message <Help style={{width: '16px'}}/> </H3>
<p style={{color: 'gray'}}>When performing actions, toast messages may appear in the button left-hand of your screen. You can disable here.</p>
</ColText>
</SwitchText1>

<SwitchText1>
<SwitchSlide/>
<ColText>
<H3>Dark Mode </H3>
<p style={{color: 'gray'}}>Switch between day mode and dark mode here</p>
</ColText>
</SwitchText1>

<SwitchText1>
<SwitchSlide/>
<ColText>
<H3>Dark Mode </H3>
<p style={{color: 'gray'}}>Switch between day mode and dark mode here</p>
</ColText>
</SwitchText1>


<SwitchText1>
<SwitchSlide/>
<ColText>
<H3>Dark Mode </H3>
<p style={{color: 'gray'}}>Switch between day mode and dark mode here</p>
</ColText>
</SwitchText1>
</BottomRightContent>

</BottomRight>
    </Right>
    </Wrapper>
    </Container>
  )
}

export default SettingsContent