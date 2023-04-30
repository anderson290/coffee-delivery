import {
  Badges,
  BadgeContainer,
  HomeContainer,
  YellowDarkBadge,
  PurpleBadge,
  YellowBadge,
  PackageBadge,
} from "./Home.styles";
import homeCoffee from "../../assets/images/home-coffee.svg";
import shoppingCartIcon from "../../assets/images/icons/shopping-cart-fill.svg";
import packageIcon from "../../assets/images/icons/package-fill.svg";
import timerIcon from "../../assets/images/icons/timer-fill.svg";
import coffeeIcon from "../../assets/images/icons/coffee-fill.svg";

import { StyledSVG } from "../../styles/themes/default";
import { coffeeList } from "../../mocks/cards";
import { Card } from "../../components/Card";
export const Home = () => {
  return (
    <HomeContainer>
      <div className="brand__section">
        <div className="">
          <h2 className="title">
            Encontre o café perfeito para qualquer hora do dia
          </h2>
          <p className="subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Badges>
            <BadgeContainer>
              <YellowDarkBadge>
                <StyledSVG
                  color={"background"}
                  width={"16px"}
                  height={"16px"}
                  src={shoppingCartIcon}
                />
              </YellowDarkBadge>
              <p>Compra simples e segura</p>
            </BadgeContainer>

            <BadgeContainer>
              <PackageBadge>
                <StyledSVG
                  color={"background"}
                  width={"16px"}
                  height={"16px"}
                  src={packageIcon}
                />
              </PackageBadge>
              <p>Embalagem mantém o café intacto</p>
            </BadgeContainer>

            <BadgeContainer>
              <YellowBadge>
                <StyledSVG
                  color={"background"}
                  width={"16px"}
                  height={"16px"}
                  src={timerIcon}
                />
              </YellowBadge>
              <p>Entrega rápida e rastreada</p>
            </BadgeContainer>

            <BadgeContainer>
              <PurpleBadge>
                <StyledSVG
                  color={"background"}
                  width={"16px"}
                  height={"16px"}
                  src={coffeeIcon}
                />
              </PurpleBadge>
              <p>O café chega fresquinho até você</p>
            </BadgeContainer>
          </Badges>
        </div>
        <div className="">
          <img src={homeCoffee} alt="" />
        </div>
      </div>
      <div className="coffee__section">
        <h3>Nossos cafés</h3>
        {coffeeList.map(coffee => {
          return (
          <Card key={coffee.id} item={coffee}>
           
          </Card>
            )
        })}
      </div>
    </HomeContainer>
  );
};
