
import styled, { keyframes } from "styled-components";
import { Button } from "../../06-shared/Button";
import { X } from "lucide-react";
import Logo from "../../assets/thornslogo.png";
import { ChevronRight } from "lucide-react";
import { useMenu } from "../../04-feature/useMenu";
import { StyledLink } from "../../06-shared/StyledLink";
import { useEffect, useState } from "react";

interface SideMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}
const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out;
  z-index: 999;
`;

const MenuWrapper = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: white;
  transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
  transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  z-index: 1000;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* распределяем логотип и кнопку */
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  padding-right: 15px;
`;
const LogoContainer = styled.div`
  width: 100px;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.03);
  }
`;


const CloseButton = styled(Button)`
  border: none;
  background: none;
  padding: 0;
  color: var(--color-text);
  border-radius: 15px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--color-bg);
  }
`;
const Content = styled.div<{ $isFading: boolean }>`
  animation: ${(props) => (props.$isFading ? fadeOut : fadeIn)} 0.3s forwards;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  flex-direction: column;
  padding: 20px;
`
const MenuItem = styled.button`
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  background: none;
  border: none;
  margin: 0;
  padding: 0 0 10px 0;
  cursor: pointer;
  font: inherit;
  outline: inherit;
`

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  const { currentItems, goToSubMenu, goBack, isRoot, menuStack, resetMenu  } = useMenu();

  const [displayItems, setDisplayItems] = useState(currentItems);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setIsFading(true);

    const timeout = setTimeout(() => {
      setDisplayItems(currentItems);
      setIsFading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [currentItems]);

  const renderMenu = () => {
    return displayItems.map((item) => {
      const isLeaf = !item.subItems || item.subItems.length === 0;
  
      // Генерация пути для StyledLink
      const path = menuStack
        .map(level => level.id.toLowerCase()) // Берём id каждого выбранного уровня
        .concat(item.id.toLowerCase()) // Добавляем текущий элемент
        .join('/');
  
      return isLeaf ? (
        // Последний уровень - рендерим ссылку
        <StyledLink to={`/${path}`} className="flex items-center" onClick={() => {
          resetMenu(); 
          onClose?.();
        }
          }>
        <MenuItem key={item.id} className="pb-4" >
          
            {item.title}
          
        </MenuItem>
        </StyledLink>
      ) : (
        // Есть подуровни - рендерим элемент с переходом в подменю
        <MenuItem
          key={item.id}
          className="pb-4"
          onClick={() => goToSubMenu(item)} // Передаем item, а не item.subItems
        >
          <div className="flex items-center justify-between w-full">
            {item.title}
            
          </div>
          <div>
          <ChevronRight size={20} strokeWidth={1.5} />
          </div>
        </MenuItem>
      );
    });
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} 
        />

      <MenuWrapper
        $isOpen={isOpen}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
      >
        <Header className="d-flex align-items-center">
            <LogoContainer>
              <img src={Logo} alt="Thorns Logo" />
            </LogoContainer>
            <div>
            <CloseButton
            as="button"
            onClick={onClose}
            aria-label="Close profile menu"
            >
              <X size={20} strokeWidth={1.5} /> 
            </CloseButton>
            </div>
        </Header>
        <Content $isFading={isFading} aria-live="polite" aria-atomic="true">
          {!isRoot && (
            <MenuItem onClick={goBack}>
              <div style={{fontSize: '10px', color: '#aaa9a9'}}>← BACK</div>
            </MenuItem>
          )}
          {renderMenu()}
        </Content>
      </MenuWrapper>
    </>
  );
}
