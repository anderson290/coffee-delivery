import { CheckoutContainer, CheckoutItemContainer } from "./Checkout.styles";
import successLogo from "../../assets/images/success.svg";
import { StyledSVG } from "../../styles/themes/default";
import locationIcon from "../../assets/images/icons/map-pin-fill.svg";
import timerIcon from "../../assets/images/icons/timer-fill.svg";
import coinIcon from "../../assets/images/icons/currenc-dollar-regular.svg";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <div className="description">
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <div className="details">
          <CheckoutItemContainer>
            <div className="purple_icon">
              <StyledSVG
                color={"background"}
                width={"16px"}
                height={"16px"}
                src={locationIcon}
              />
            </div>
            <div className="details_text">
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p> Farrapos - Porto Alegre, RS</p>
            </div>
          </CheckoutItemContainer>
          <CheckoutItemContainer>
            <div className="yellow_icon">
              <StyledSVG
                color={"background"}
                width={"16px"}
                height={"16px"}
                src={timerIcon}
              />
            </div>
            <div className="details_text">
              <p>Previsão de entrega </p>{" "}
              <p>
                <span> 20 min - 30 min</span>
              </p>
            </div>
          </CheckoutItemContainer>
          <CheckoutItemContainer>
            <div className="yellow_dark_icon">
              <StyledSVG
                color={"background"}
                width={"16px"}
                height={"16px"}
                src={coinIcon}
              />
            </div>
            <div className="details_text">
              <p>Pagamento na entrega </p>{" "}
              <p>
                <span>Cartão de Crédito</span>
              </p>
            </div>
          </CheckoutItemContainer>
        </div>
      </div>
      <img src={successLogo} alt="" />
    </CheckoutContainer>
  );
};
