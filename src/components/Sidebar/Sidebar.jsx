import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import { useLocation, Link } from "react-router-dom";
import SubMenu from "./SubMenu";

const Container = styled.aside`
  background: #061031;
  color: #fff;
  width: 20%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-size: 16.31px;
  font-weight: 500;
  align-items: center;
  margin-left: 48px;
  margin-top: 46px;
  padding-bottom: 1rem;
  border-bottom: 1px solid lightblue;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* background-color: lightblue */}
`;

const Listed = styled.h2`
  font-size: 16.31px;
  font-weight: 500;
  align-items: center;
  ${"" /* background-color: red!important; */}
  gap: 1rem;
  padding-left: 48px;
  display: flex;
  width: inherit;
  height: 38px;
  background-color: ${({ theme, isActive }) =>
    isActive ? "#1E294D" : "transparent"};

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
  gap: 1rem;

  &:hover {
    background-color: #1e294d;
  }
`;

const Sidebar = () => {
  const { pathname } = useLocation();

  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <Container>
      <TitleContainer>
        <Title> Loan App</Title>
      </TitleContainer>
      <Content>
        {SidebarData.map((item, index) => {
          return (
            <>
              <Listed
                onClick={item.subMenus && showSubnav}
                isActive={pathname === item.to}
                key={index}
              >
                <NavLink to={item.to}>
                  {" "}
                  <div style={{ marginTop: "5px" }}>{item.icon}</div>
                  {item.label}{" "}
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
            </>
          );
        })}
      </Content>
    </Container>
  );
};

export default Sidebar;
