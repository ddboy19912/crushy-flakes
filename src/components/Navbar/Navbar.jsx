import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { Badge } from '@material-ui/core'
import {NotificationsNone } from '@material-ui/icons'
import {useLocation} from 'react-router-dom'
// import {useGlobalContext} from '../../context'
import { useSelector, useDispatch } from 'react-redux'
import {toggleDropdown, openModal} from '../../features/dash/dashSlice'
import {Link} from 'react-router-dom'


const Container = styled.div`
display: flex;
max-width: 100%;
height: 80px;
background-color: white;
position: sticky;
top: 0;
z-index: 1;
box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14S);
-webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
-moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.14);
`
const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
padding: 0 20px; 
`
const Title = styled.h1`
font-size: 20px;
`
const Right = styled.div`
display: flex;
align-items: center;
gap: 1rem;
`

const UserWrapper = styled.div`
display: flex;
align-items: center;
gap: 1rem;
position: relative;
cursor: pointer;
`
const DropDownWrapper = styled.div`
position: absolute;
background: #FFFFFF;
border: 0.5px solid #E5E5E5;
border-radius: 2px;
width: 175px;
height: 140px;
top: 3.2rem;
left: -2.6rem;
`




const TextWrapper = styled.div`
display: inline;
flex-wrap: wrap;
`

const Image = styled.div`
background-image: url("https://i.ibb.co/dL236w1/loan-app-image.png");
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 32px;
height: 32px;
border-radius: 50%;
`
const Name = styled.h3`
font-size: 12px;
`
const Job = styled.p`
font-size: 12px;
color: gray;
margin-top: -6px;
`

const DropWrap = styled.div`
${'' /* padding-top: 30px; */}
${'' /* padding-left: 16px; */}
width: 100%;
${'' /* background-color: red; */}
`


const Drop1 = styled.div`
border-bottom: 1px solid #F2F0F0;
margin-top: -1rem;
font-weight: 500;
font-size: 14px;
line-height: 143%;
letter-spacing: 0.15px;
${'' /* background-color: blue; */}
width: 100%;

color: #000D09;

`
const Drop2 = styled.div`
margin-top: -0.3rem;
font-weight: 500;
font-size: 14px;
color: #D1373F;
line-height: 143%;
letter-spacing: 0.15px;
margin-left: 16px;
${'' /* background-color: blue; */}
width: 100%;

`

const Div = styled.div`
${'' /* background-color: orange; */}
margin-top: 26px;
margin-left: 16px;

`

const NavLink = styled(Link)`
text-decoration: none;
color: black;
  &:hover {
     ${'' /* background-color: #1E294D; */}
  }
`


const Navbar = () => {

    const {dropdown} = useSelector((state) => state.dash)

    const dispatch = useDispatch();

const {pathname} = useLocation();

const [current, setCurrent] = useState('')

// const {dropdown, ToggleDropdown} = useGlobalContext();

useEffect(() => {

if (pathname === '/') {
    setCurrent('Dashboard')
}
else if (pathname === '/support'){
    setCurrent('Support')
}
else if (pathname === '/settings' || pathname === '/profile'){
    setCurrent('Settings')
}else if (pathname === '/investment'){
    setCurrent('Investment')
}


  

},[pathname]);


    return (
        <Container>
            <Wrapper>
                <Title>{current}</Title>
                <Right>
                <Badge color="secondary" overlap='circular' variant="dot"
                style={{cursor: 'pointer'}}>
 <NotificationsNone />
 </Badge>
 <UserWrapper onClick={() => {dispatch(toggleDropdown())}}>
 <Image/>
 <TextWrapper>
 <Name>Esther Howard</Name>
 <Job>Administrator</Job>
 </TextWrapper>
 {dropdown && <DropDownWrapper>
 <DropWrap>
 <Drop1> 
 <Div> 
 <h4><NavLink to='/profile'>View Profile</NavLink></h4>
    <h4><NavLink to='/settings'>Settings</NavLink></h4>
    </Div>
    </Drop1>
<Drop2 onClick={() => dispatch(openModal())} >
    <h4>Log Out</h4>
    </Drop2>

    </DropWrap>
 </DropDownWrapper>}
 </UserWrapper>
 </Right>
            
            </Wrapper>
        </Container>
    )
}

export default Navbar
