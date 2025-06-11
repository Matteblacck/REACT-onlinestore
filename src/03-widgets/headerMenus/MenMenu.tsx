import styled from "styled-components";
import { StyledLink } from "../../06-shared/StyledLink"; // Убедись, что путь корректный

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

export function MenMenu() {
  return (
    <>
      <div className="d-flex gap-5">
        <div>
          <TabHeader>SHOES</TabHeader>
          <TabList>
            <li>
              <StyledLink to="/men/shoes/sneakers">Sneakers</StyledLink>
            </li>
            <li>
              <StyledLink to="/men/shoes/boots">Boots</StyledLink>
            </li>
            <li>
              <StyledLink to="">Slides</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>OUTWEAR</TabHeader>
          <TabList>
            <li>
              <StyledLink to="/men/outwear/jackets">Jackets</StyledLink>
            </li>
            <li>
              <StyledLink to="/men/outwear/hoodies">Hoodies</StyledLink>
            </li>
            <li>
              <StyledLink to="/men/outwear/sweaters">Sweaters</StyledLink>
            </li>
          </TabList>
        </div>

        <div>
          <TabHeader>PANTS</TabHeader>
          <TabList>
            <li>
              <StyledLink to="">Shorts</StyledLink>
            </li>
            <li>
              <StyledLink to="">Baggy</StyledLink>
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
              <StyledLink to="">Hats</StyledLink>
            </li>
            <li>
              <StyledLink to="">Bags</StyledLink>
            </li>
            <li>
              <StyledLink to="">Sunglasses</StyledLink>
            </li>
          </TabList>
        </div>
      </div>
    </>
  );
}