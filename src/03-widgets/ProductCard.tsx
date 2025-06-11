import styled from "styled-components";
import type { Product } from "../05-entities/products/types";
import { StyledLink } from "../06-shared/StyledLink";

const CardContainer = styled.div`
  width: 33vw;
  height: auto;
  padding: 16px;
  background-color: #f5f5f5;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Едва различимая тень */

  @media (max-width: 1024px) {
    width: 50vw;
  }

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 425px) {
    height: 200px;
    object-fit: contain;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Placeholder = styled.div`
  font-size: 14px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Sizes = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: nowrap; /* чтобы не переносились */
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
interface CardProps {
  product: Product;
}

export function ProductCard({ product }: CardProps) {
  // Пример пути: /section/category/subcategory/id
  const productLink = `${product.name}`;

  return (
    <StyledLink to={productLink}> 
      <CardContainer>
        <ImageWrapper>
          {product.photos.length > 0 ? (
            <img src={product.photos[0]} alt={product.name} />
          ) : (
            <Placeholder>No Image</Placeholder>
          )}
        </ImageWrapper>
        <Content>
          <Name>{product.name}</Name>
          <Sizes>
            <p>{product.price}$</p>
          </Sizes>
        </Content>
      </CardContainer>
    </StyledLink>
  );
}