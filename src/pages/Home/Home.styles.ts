import styled, { css } from "styled-components";

export const HomeContainer = styled.div`
  padding: 2rem 6rem;
  .brand__section {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 48px;
      font-family: "Baloo 2", cursive;
      line-height: 62.4px;
    }

    p.subtitle {
      font-size: 20px;
      line-height: 26px;
      margin-bottom: 66px;
    }
  }
  .coffee__section {
    h3 {
      font-size: 32px;
      font-family: "Baloo 2", cursive;
    }
  }
`;

export const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;


export const Badges = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr;
  p {
    font-size: 16px;
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

export const YellowDarkBadge = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme["yellow-dark"]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const PackageBadge = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme["base-text"]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const YellowBadge = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme["yellow"]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const PurpleBadge = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${(props) => props.theme["purple"]};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
