import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

// const DropdownLink = styled(Link)`
//   color: ${({ theme, isActive }) => (isActive ? 'pink' : 'white')};
//   text-decoration: none;
//   font-size: 12px;

//   &:hover {
//     background-color: #1e294d;
//   }
// `;

const List = styled.li`
  margin-left: 16px;
  color: ${({ theme, isActive }) => (isActive ? 'pink' : 'white')};
  list-style: none;
`;
const SubNav = styled.div`
  display: ${(props) => (props.subnav ? 'block' : 'none')};
`;
const SidebarLink = styled(Link)`
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
  font-size: 12px;
`;

const DropdownLink = styled(Link)`
  background: #181f38;
  height: 40px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 12px;

  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
const SubMenu = ({ item }) => {
  // const { pathname } = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.to} onClick={item.subMenus && showSubnav}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {item.icon}
          <SidebarLabel>{item.label}</SidebarLabel>
        </div>
        <div>
          {item.subMenus && subnav
            ? item.iconOpened
            : item.subMenus
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subMenus.map((item, index) => {
          return (
            <DropdownLink to={item.to} key={index}>
              <SidebarLabel>{item.name}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
