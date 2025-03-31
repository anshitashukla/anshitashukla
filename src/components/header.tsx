// src/components/Header.tsx
import React, { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  position: fixed;
  width: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  @media (max-width: 768px) {
    padding: 20px 30px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: white;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const Nav = styled.nav<{ isOpen: boolean }>`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    padding: 20px;
    border-radius: 10px;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  text-transform: uppercase;
  &:hover {
    color: #ff00ff;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 30px;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 30px;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Logo>Portfolio</Logo>
      <Hamburger onClick={toggleMenu}>☰</Hamburger>
      <Nav isOpen={isOpen}>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#education">Education</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
