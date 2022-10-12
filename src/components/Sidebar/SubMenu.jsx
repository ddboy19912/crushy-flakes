import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const DropdownLink = styled(Link)`
  color: ${({ theme, isActive }) => (isActive ? 'pink' : 'white')};
  text-decoration: none;
  font-size: 12px;

  &:hover {
    background-color: #1e294d;
  }
`;

const List = styled.li`
  margin-left: 16px;
  color: ${({ theme, isActive }) => (isActive ? 'pink' : 'white')};
  list-style: none;
`;
const SubNav = styled.div`
  display: ${(props) => (props.subnav ? 'block' : 'none')};
`;

const SubMenu = ({ item, subnav }) => {
  const { pathname } = useLocation();

  return (
    <SubNav subnav={subnav}>
      {item.subMenus?.map((thing, i) => {
        return (
          <ul key={i}>
            {subnav && (
              <List isActive={pathname === thing.to}>
                <DropdownLink to={thing.to} isActive={pathname === thing.to}>
                  {thing.name}
                </DropdownLink>
              </List>
            )}
          </ul>
        );
      })}
    </SubNav>
  );
};

export default SubMenu;
