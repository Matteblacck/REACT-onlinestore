import styled from "styled-components";
import type { ButtonHTMLAttributes, ReactNode } from "react";
const StyledButton = styled.button`
  border: 1px solid #cecece;
  background: transparent;
  padding: 0.5rem 1rem;
  width: auto;
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #e6e6e6;
  }

  &.active {
    background: #595252;
    color: #fff;
  }

  &:active {
    background: #d4d4d4;
    transform: scale(0.98);
  }
`;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};