import styled from "styled-components";
import { StyledLink } from "../../06-shared/StyledLink";


const TabHeader = styled.div`
  font-weight: 700;
  font-size: 20px;
`;
const TabList = styled.ul`
  display: flex;
  font-size: 13px;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export function WomenMenu() {
  return (
    <>
      <div className="d-flex gap-5">
        <div>
          <TabHeader>DRESSES</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Maxi</StyledLink>
            </li>
            <li>
              <StyledLink to="">Midi</StyledLink>
            </li>
            <li>
              <StyledLink to="">Bodycon</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>TOPS</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Blouses</StyledLink>
            </li>
            <li>
              <StyledLink to="">Tanks</StyledLink>
            </li>
            <li>
              <StyledLink to="">Cardigans</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>PANTS</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Palazzo</StyledLink>
            </li>
            <li>
              <StyledLink to="">Shorts</StyledLink>
            </li>
            <li>
              <StyledLink to="">Flared</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>ACCESSORIES</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Handbags</StyledLink>
            </li>
            <li>
              <StyledLink to="">Belts</StyledLink>
            </li>
            <li>
              <StyledLink to="">Earrings</StyledLink>
            </li>
          </TabList>
        </div>
      </div>
    </>
  );
}