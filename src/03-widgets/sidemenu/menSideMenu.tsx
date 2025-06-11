import { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../../06-shared/Button";
import { X } from "lucide-react";
import Logo from "../assets/thornslogo.png";
import { ChevronRight } from "lucide-react";

interface SideMenuProps {
  isOpen: boolean;
  onClose?: () => void;
}

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
const Content = styled.div`
  display: flex;
  font-size: 20px;
  font-weight: 600;
  flex-direction: column;
  padding: 20px;
`
const MenuItem = styled.div`
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
`

export default function ProfileMenu({ isOpen, onClose }: SideMenuProps) {
  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Закрытие меню по клавише "Escape"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={onClose} />

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
        <Content>
        <MenuItem className="pb-4">
            <div>SHOES</div>
            <div><ChevronRight size={20} strokeWidth={1.5} /></div> 
          </MenuItem >
          <MenuItem className="pb-4">
            <div>OUTWEAR</div>
            <div><ChevronRight size={20} strokeWidth={1.5} /></div> 
          </MenuItem >
          <MenuItem className="pb-4">
            <div>PANTS</div>
            <div><ChevronRight size={20} strokeWidth={1.5} /></div> 
          </MenuItem >
          <MenuItem className="pb-4">
            <div>ACCESSORIES</div>
            <div><ChevronRight size={20} strokeWidth={1.5} /></div> 
          </MenuItem >
        </Content>
      </MenuWrapper>
    </>
  );
}
