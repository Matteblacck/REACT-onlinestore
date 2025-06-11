import styled from "styled-components";

interface MenuSectionProps{
    isActive: boolean;
    children: React.ReactNode;
}

const MenuContainer = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  max-height: ${({ isActive }) => (isActive ? "500px" : "0")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  z-index: 1000; // Добавьте это
  border-top: 1px solid #eee; // Опционально для лучшего визуального разделения
`;
const MenuContent = styled.div`
  padding: 20px;
`;

export default function MenuSection({ isActive, children }: MenuSectionProps) {
  return (
    <MenuContainer isActive={isActive}>
      <MenuContent>{children}</MenuContent>
    </MenuContainer>
  );
}
