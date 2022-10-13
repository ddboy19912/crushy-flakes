import React, { useState } from 'react';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import { useLocation, Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import profileImg from '../../images/Ellipse 10 (1).png';

const Container = styled.aside`
  display: block;
  background: #061031;
  color: #fff;
  width: 100%;
  flex: 1;
  z-index: 999;
  height: 100vh;
  overflow: scroll;
  position: sticky;
  top: 0;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: -2rem !important;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
  padding-top: 2rem;
`;

const Listed = styled.h2`
  font-size: 16.31px;
  font-weight: 500;
  align-items: center;
  gap: 1rem;
  padding-left: 48px;
  margin-left: -2rem;
  display: flex;
  width: inherit;
  height: 38px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: ${({ theme, isActive }) =>
    isActive ? '#1E294D' : 'transparent'};

  &:hover {
    background-color: #1e294d;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  gap: 0.2rem;

  &:hover {
    background-color: #1e294d;
  }
`;

const NavFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 12px;
`;

const Name = styled.h2`
  font-size: 16px;
  margin-top: 1rem;
`;

const Role = styled.h3`
  font-size: 12px;
  margin-top: -0.5rem;
`;
const Status = styled.p`
  color: green;
  font-size: 10px;
  /* margin-top: -0.5rem; */
`;

const Circle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: green;
`;

const Sidebar = () => {
  const { pathname } = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <Container>
      <Content>
        <TitleContainer>
          <img src={profileImg} alt="" width="100px" />
          <Name>ESTHER HOWARD</Name>
          <Role>ADMINISTRATOR</Role>
          <span
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-0.8rem',
            }}
          >
            <Circle></Circle>
            <Status>Online</Status>
          </span>
        </TitleContainer>
        <div>
          {' '}
          {SidebarData.map((item, index) => {
            return (
              <div key={index}>
                <Listed
                  onClick={item.subMenus && showSubnav}
                  isActive={pathname === item.to}
                >
                  <NavLink to={item.to}>
                    <NavFlex>
                      <div style={{ transform: 'scale(0.9)' }}>{item.icon}</div>
                      {item.label}
                    </NavFlex>
                    <span>
                      {item.subMenus && subnav
                        ? item.iconOpened
                        : item.subMenus
                        ? item.iconClosed
                        : null}
                    </span>
                  </NavLink>
                </Listed>
                <SubMenu item={item} subnav={subnav} />
              </div>
            );
          })}
        </div>
      </Content>
    </Container>
  );
};

export default Sidebar;
