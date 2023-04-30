import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 6rem;
  align-items: center;
  gap: 1rem;

  .location_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    .location {
      width: 143px;
      height: 38px;
      background: ${(props) => props.theme["purple-light"]};
      color: ${(props) => props.theme["purple-dark"]};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      border-radius: 5px;
      gap: 0.2rem;
      padding-right: 0.3rem;
    }

    .icon {
      width: 38px;
      height: 38px;
      border-radius: 5px;
      background: rgb(241, 233, 201);
      -webkit-box-pack: center;
      justify-content: center;
      -webkit-box-align: center;
      align-items: center;
      cursor: pointer;
      text-align: center;
      margin: 0 auto;
      padding-top: 10px;
      img {
        width: 19px;
        color: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }
`;

export const CardCartAmount = styled.span`
  position: relative;
  top: -42px;
  left: 22px;
  font-size: 10px;
  background: ${(props) => props.theme["yellow-dark"]};
  color: ${(props) => props.theme["white"]};
  font-weight: bold;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  align-items: center;
`;
