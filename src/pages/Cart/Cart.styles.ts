import styled from "styled-components";

export const CartContainer = styled.div`
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;

  h2 {
    font-size: 18px;
    font-family: "Baloo 2", cursive;
  }
`;

export const CartAddress = styled.div`
  width: 100%;
  background: ${(props) => props.theme["base-card"]};
`;

export const CartItems = styled.div`
  background: ${(props) => props.theme["base-card"]};
  width: 100%;
  border-radius: 6px 36px;
  padding: 48px 44px;
`;

export const CartItem = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 1fr 3fr 1fr;
  padding-bottom: 33.5px;
  margin-bottom: 33.5px;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};
`;

export const CartItemName = styled.p`
  margin-bottom: 8px;
`;

export const CartItemDescription = styled.div`
  padding-left: 1rem;
`;

export const CartItemPrice = styled.p`
  font-size: 16px;
  font-weight: 700;
`;



export const CardAmountContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
`;


export const CartSubTotal = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  color: ${(props) => props.theme["base-text"]};
`;

export const CartTotal = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const CartConfirm = styled.button`
  width: 100%;
  text-align: center;
  height: 46px;
  background-color: ${(props) => props.theme["yellow"]};
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme["white"]};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin-top: 36px;
`;

export const CartEmpty = styled.div`
  text-align: center;
`;
