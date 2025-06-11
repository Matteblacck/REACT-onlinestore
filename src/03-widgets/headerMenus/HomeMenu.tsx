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

export function HomeMenu() {
  return (
    <>
      <div className="d-flex gap-5">
        <div>
          <TabHeader>LIVING ROOM</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Sofas</StyledLink>
            </li>
            <li>
              <StyledLink to="">Chairs</StyledLink>
            </li>
            <li>
              <StyledLink to="">Tables</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>BEDROOM</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Beds</StyledLink>
            </li>
            <li>
              <StyledLink to="">Dressers</StyledLink>
            </li>
            <li>
              <StyledLink to="">Nightstands</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>KITCHEN</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Cookware</StyledLink>
            </li>
            <li>
              <StyledLink to="">Dining Sets</StyledLink>
            </li>
            <li>
              <StyledLink to="">Storage</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>DECOR</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Rugs</StyledLink>
            </li>
            <li>
              <StyledLink to="">Lighting</StyledLink>
            </li>
            <li>
              <StyledLink to="">Wall Art</StyledLink>
            </li>
          </TabList>
        </div>
      </div>
    </>
  );
}