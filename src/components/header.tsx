// src/components/Header.tsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Fixed header with a defined height.
const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: var(--header-bg);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  transition: background 0.3s ease;

  @media (max-width: 800px) {
    padding: 0 30px;
  }
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: var(--text-color);
`;

// Desktop navigation is shown inline within the header.
const DesktopNav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 800px) {
    display: none;
  }
`;

// Mobile navigation slides down below the header.
const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    gap: 15px;
    position: fixed;
    top: 70px; /* Positioned right below the header */
    left: 0;
    width: 100%;
    background: var(--header-bg);
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 999;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
  }
`;

const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-size: 18px;
  position: relative;
  display: inline-block;
  width: fit-content; /* Ensures the element only takes up as much width as its content */
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: #ff00ff;
    transform: scale(1.05);
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #ff00ff;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

// HamburgerIcon toggles between the hamburger and close (X) icon.
const HamburgerIcon = styled.div<{ isOpen: boolean }>`
  display: none;
  width: 30px;
  height: 22px;
  position: relative;
  cursor: pointer;

  @media (max-width: 800px) {
    display: block;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: var(--text-color);
    border-radius: 3px;
    left: 0;
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: ${({ isOpen }) => (isOpen ? "9px" : "0px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
  }

  span:nth-child(2) {
    top: 9px;
    opacity: ${({ isOpen }) => (isOpen ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ isOpen }) => (isOpen ? "9px" : "18px")};
    transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
  }
`;

// Toggle switch for dark/light mode.
const ToggleContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background: linear-gradient(45deg, #f4a261, #e76f51);
  }

  &:checked + .slider:before {
    transform: translateX(26px);
    background-color: #f4a261;
    content: "☀️";
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, #a8dadc, #457b9d);
  transition: 0.4s;
  border-radius: 34px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:before {
    position: absolute;
    content: "🌙";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
`;

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <HeaderContainer>
        <Logo>Portfolio</Logo>
        <DesktopNav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <ToggleContainer>
            <ToggleInput
              type="checkbox"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <Slider className="slider" />
          </ToggleContainer>
        </DesktopNav>
        <HamburgerIcon isOpen={isOpen} onClick={toggleMenu}>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      </HeaderContainer>

      <MobileNav isOpen={isOpen}>
        <NavLink href="#about" onClick={() => setIsOpen(false)}>
          About
        </NavLink>
        <NavLink href="#skills" onClick={() => setIsOpen(false)}>
          Skills
        </NavLink>
        <NavLink href="#experience" onClick={() => setIsOpen(false)}>
          Experience
        </NavLink>
        <NavLink href="#projects" onClick={() => setIsOpen(false)}>
          Projects
        </NavLink>
        <NavLink href="#education" onClick={() => setIsOpen(false)}>
          Education
        </NavLink>
        <ToggleContainer>
          <ToggleInput
            type="checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <Slider className="slider" />
        </ToggleContainer>
      </MobileNav>
    </>
  );
};

export default Header;
