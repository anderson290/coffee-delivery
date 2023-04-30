import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 22rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 36px;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const CardImage = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin-bottom: 1rem;
`;

export const CardTag = styled.div`
  p {
    font-size: 10px;
  }
  background-color: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 4px 8px;
  border-radius: 1rem;
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-weight: 700;
  font-size: 10px;

  &:last-child {
  margin-right: 0rem;

  }
`;

export const CardBody = styled.div`
  text-align: center;
  padding: 1rem;
`;

export const CardTitle = styled.p`
  font-family: "Baloo 2", cursive;
`;

export const CardDescription = styled.p`
  color: ${(props) => props.theme["base-hover"]};
`;

export const CardFooter = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;

export const CardPrice = styled.div`
  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 14px;
    span {
      font-family: "Baloo 2", cursive;
      font-size: 24px;
    }
  }
`;

export const CardAmount = styled.div`
  background-color: ${(props) => props.theme["base-button"]};
  width: 72px;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem;
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;
    color: ${(props) => props.theme["purple"]};
    font-size: 1rem;
  }
`;

export const CardCartButton = styled.button`
  width: 38px;
  height: 38px;
  border-radius: 5px;
  background: ${(props) => props.theme["purple-light"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  border: 0;
  img {
    width: 19px;
    color: ${(props) => props.theme["purple-dark"]};
  }
`;
