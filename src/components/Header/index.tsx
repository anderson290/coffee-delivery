import { HeaderContainer } from "./Header.styles";

import locationIcon from "../../assets/images/icons/map-pin-fill.svg";
import shoppingCartIcon from "../../assets/images/icons/shopping-cart-fill.svg";
import brandLogo from "../../assets/images/logo.svg";
import { StyledSVG } from "../../styles/themes/default";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={brandLogo} alt="logo" />
      <div className="location_container">
        <div className="location">
          <StyledSVG color={'yellow-dark'} width={'22px'} height={'22px'} src={locationIcon}/>
          <p>Porto Alegre, RS</p>
        </div>
        <div className="icon">
          <StyledSVG color={'yellow-dark'} width={'19px'} height={'19px'} src={shoppingCartIcon}/>
        </div>
      </div>
    </HeaderContainer>
  );
};

export default Header;
