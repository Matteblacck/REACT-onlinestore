import { useSelector } from "react-redux";
import type { RootState } from "../01-app/redux/store";
import { CartItem } from "../03-widgets/CartItem";
import styled from "styled-components";
import { selectTotalAmount } from "../01-app/slices/cartSlice";
import { StyledLink } from "../06-shared/StyledLink";

const Wrapper = styled.div`
  padding: 1rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
`;

const CartTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #333;
  margin: 0;

  span {
    font-weight: 400;
    color: #666;
    font-size: 1rem;
    margin-left: 0.5rem;
  }
`;

const TotalAmount = styled.div`
  text-align: right;
`;

const TotalLabel = styled.span`
  font-size: 0.8rem;
  color: #666;
  margin-right: 0.5rem;
`;

const TotalValue = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem 0;
`;

const EmptyCartText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const ShopButton = styled.button`
  padding: 0.6rem 1.2rem;
  background: #000;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector(selectTotalAmount);

  return (
    <Wrapper>
      <CartHeader>
        <CartTitle>
          Cart<span>{cart.length} item{cart.length !== 1 ? 's' : ''}</span>
        </CartTitle>
        
        <TotalAmount>
          <TotalLabel>Total:</TotalLabel>
          <TotalValue>${totalAmount.toFixed(2)}</TotalValue>
        </TotalAmount>
      </CartHeader>

      {cart.length ? (
        <div>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyCart>
          <EmptyCartText>Your cart is empty</EmptyCartText>
          <StyledLink to="/">
            <ShopButton>Continue Shopping</ShopButton>
          </StyledLink>
        </EmptyCart>
      )}
    </Wrapper>
  );
}