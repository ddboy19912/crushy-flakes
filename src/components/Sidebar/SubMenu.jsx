import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {useLocation} from 'react-router-dom'




const DropdownLink = styled(Link)`
 color: ${({theme, isActive}) => (isActive ? 'pink' : 'white')};
  text-decoration: none;


  &:hover {
     background-color: #1E294D;
  }
`;

const List = styled.li`
margin-left: 52px;
color: ${({theme, isActive}) => (isActive ? 'pink' : 'white')};
`
const SubNav = styled.div`
display: ${props => (props.subnav ? 'block' : 'none')}
`



const SubMenu = ({item, subnav}) => {

    // const [isActive, setIsActive] = useState(true)

const {pathname} = useLocation();

    return(
        <SubNav subnav={subnav}>
           {item.subMenus?.map((thing) =>  {
            return (
                <ul>
                {subnav && <List isActive={pathname === thing.to}><DropdownLink to={thing.to} isActive={pathname === thing.to}>{thing.name}</DropdownLink></List>}
                </ul>
            )
           })}
        </SubNav>
    )
}

export default SubMenu










