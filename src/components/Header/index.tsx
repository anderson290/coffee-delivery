import { CardCartAmount, HeaderContainer } from "./Header.styles";

import locationIcon from "../../assets/images/icons/map-pin-fill.svg";
import shoppingCartIcon from "../../assets/images/icons/shopping-cart-fill.svg";
import brandLogo from "../../assets/images/logo.svg";
import { StyledSVG } from "../../styles/themes/default";
import { useCart } from "../../hooks/CartContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate("/cart");
  };
  return (
    <HeaderContainer>
      <img src={brandLogo} alt="logo" onClick={goToHome} />
      <div className="location_container">
        <div className="location">
          <StyledSVG
            color={"yellow-dark"}
            width={"22px"}
            height={"22px"}
            src={locationIcon}
          />
          <p>Porto Alegre, RS</p>
        </div>
        <div className="icon" onClick={goToCart}>
          <StyledSVG
            color={"yellow-dark"}
            width={"19px"}
            height={"19px"}
            src={shoppingCartIcon}
          />
          {cart.length > 0 && (
            <CardCartAmount>
              {
                cart.filter((item, index) => cart.indexOf(item) === index)
                  .length
              }
            </CardCartAmount>
          )}
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
