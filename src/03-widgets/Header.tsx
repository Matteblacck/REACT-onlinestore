import styled from "styled-components";
import Logo from "../assets/thornslogo.png";
import "remixicon/fonts/remixicon.css";
import { useState } from "react";
import MenuSection from "./headerMenus/MenuSection";
import { MenMenu } from "./headerMenus/MenMenu";
import { WomenMenu } from "./headerMenus/WomenMenu";
import { HomeMenu } from "./headerMenus/HomeMenu";
import { StyledLink } from "../06-shared/StyledLink";
import SideMenu from './sidemenu/sideMenu';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;          
  left: 0;         
  width: 100%;    
  background-color: white; 
  z-index: 1000;  
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
  padding: 5px 20px 5px 10px;
  will-change: transform; /* Оптимизация для анимаций */
`;

const LogoContainer = styled.div`
  width: 150px;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.03);
  }

  @media (max-width: 600px) {
    width: 100px; /* уменьшаем ширину для телефонов */
  }
`;

const Navmenu = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 2vw;
  gap: 15px;
  font-size: 13px;
  font-weight: 500;
  will-change: transform; /* Оптимизация для анимаций */

  li {
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.2s ease;
    padding: 8px 0;
    transform: translateY(0);

    &:hover {
      transform: translateY(-2px);
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #000;
      transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const Icons = styled.ul`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-left: auto;
  list-style-type: none;
  font-size: 24px;

  i {
    cursor: pointer;
    transition: all 0.2s ease;
    padding: 5px;
    border-radius: 50%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      transform: scale(1.1);
    }
  }

  @media (max-width: 600px) {
    font-size: 18px; /* уменьшаем размер иконок */
    gap: 10px; /* уменьшаем промежуток между ними */
  }
`;


export default function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = () => {
    switch (activeMenu) {
      case "men":
        return <MenMenu />;
      case "women":
        return <WomenMenu />;
      case "home":
        return <HomeMenu/>;
      default:
        return null;
    }
  };

  return (
    <HeaderContainer onMouseLeave={handleMouseLeave}>
      <LogoContainer>
        <img src={Logo} alt="Thorns Logo" />
      </LogoContainer>
      
      <Navmenu className="d-none d-sm-flex">
        <li onMouseEnter={() => handleMouseEnter("men")}>MEN</li>
        <li onMouseEnter={() => handleMouseEnter("women")}>WOMEN</li>
        <li onMouseEnter={() => handleMouseEnter("home")}>HOME</li>
      </Navmenu>
      
      <Icons>
        <i className="ri-search-line"></i>
        <StyledLink to="/cart"><i className="ri-shopping-cart-line"></i></StyledLink>
        {/* <i className="ri-heart-line"></i> */}
        <i 
          onClick={() => setIsMenuVisible(true)} 
          className="ri-menu-line d-block d-sm-none"
        ></i>
      </Icons>

      <MenuSection isActive={!!activeMenu}>{renderMenu()}</MenuSection>
      
      <SideMenu 
        isOpen={isMenuVisible} 
        onClose={() => setIsMenuVisible(false)}
      />
    </HeaderContainer>
  );
}