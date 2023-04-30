import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2rem 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: end;
  h2 {
    font-size: 32px;
    font-family: "Baloo 2", cursive;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  h3 {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 20px;
  }

  .details {
    padding: 45px 40px;
    border-image: linear-gradient(#dbac2c, #8047f8) 50;
    border-width: 2px;
    border-style: solid;
    margin-top: 40px;
    color:  ${(props) => props.theme["base-text"]}; 

    &_text {
      display: grid;
    }
    span {
      font-weight: 700;
    }
  }
`;


export const CheckoutItemContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  align-items: center;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }

  .yellow_dark_icon {
    background:  ${(props) => props.theme["yellow-dark"]};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  .yellow_icon {
    background:  ${(props) => props.theme["yellow"]};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;

  }

  .purple_icon {
    background:  ${(props) => props.theme["purple"]};
    display: flex;
    justify-content:center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;


