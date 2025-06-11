import styled from "styled-components";
import { decreaseQuantity, increaseQuaintity, removeItem, type CartItem as CartItemType } from "../01-app/slices/cartSlice";
import { StyledLink } from "../06-shared/StyledLink";
import { Button } from "../06-shared/Button";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../01-app/redux/store";

const CartItemContainer = styled.div`
  width: 100%;
  padding: 24px;
  margin-bottom: 16px;
  background-color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 24px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #eee;

  @media (max-width: 576px) {
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }
`;

const ProductImage = styled.div`
  width: 160px;
  height: 160px;
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 576px) {
    width: 270px;
    height: 270px;
  }
  
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Name = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #222;
  margin: 0;
`;

const Details = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
`;

const DetailItem = styled.span`
  font-size: 14px;
  padding: 6px 12px;
  background-color: #f5f5f5;
  border-radius: 20px;
  color: #555;
`;

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const productLink = `/products/${item.id}`;
  const dispatch = useDispatch<AppDispatch>();

  const handleIncrement = () => {
    dispatch(increaseQuaintity(item))
  };
  const handleDecrement = () => {
    dispatch(decreaseQuantity(item))
  };
  return (
    <CartItemContainer>
      <ProductImage>
        <img src={item.photo || "https://via.placeholder.com/100"} alt={item.name} />
      </ProductImage>
      
      <Content>
        <StyledLink to={productLink}>
          <Name>{item.name}</Name>
        </StyledLink>
        
        <Price>${item.price.toFixed(2)}</Price>
        
        <Details>
          {item.size && <DetailItem>Size: {item.size}</DetailItem>}
          <DetailItem>Quantity: {item.quantity}</DetailItem>
          <DetailItem>Total: ${(item.price * item.quantity).toFixed(2)}</DetailItem>
        </Details>
        <Details>
          <Button style={{width:'45px'}} onClick={handleIncrement}>+</Button>
          <Button style={{width:'45px'}} onClick={handleDecrement}>-</Button>
          <Button onClick={() => dispatch(removeItem(item))}>Remove</Button>
        </Details>
      </Content>
    </CartItemContainer>
  );
};