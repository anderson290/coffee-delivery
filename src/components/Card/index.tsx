import { StyledSVG } from "../../styles/themes/default";
import {
  CardAmount,
  CardBody,
  CardCartButton,
  CardContainer,
  CardDescription,
  CardFooter,
  CardImage,
  CardPrice,
  CardTag,
  CardTitle,
} from "./Card.styles";
import shoppingCartIcon from "../../assets/images/icons/shopping-cart-fill.svg";
import plusBoldIcon from "../../assets/images/icons/plus-bold.svg";
import minusBoldIcon from "../../assets/images/icons/minus-bold.svg";

export const Card = ({ item }: any) => {

  console.log(item.localImage)
  return (
    <CardContainer>
      <CardImage>
        <StyledSVG
          color={"base-text"}
          width={"120px"}
          height={"120px"}
          src={item.localImage}
        />
      </CardImage>
     
        <p>{item.tags.map((tag: string) =>  <CardTag>{tag.toUpperCase()}</CardTag>)}</p>
      <CardBody>
        <CardTitle>{item?.name}</CardTitle>
        <CardDescription>{item?.description}</CardDescription>
      </CardBody>
      <CardFooter>
        <CardPrice>
          <p>
            R$ <span>{item.price}</span>
          </p>
        </CardPrice>
        <CardAmount>
          <button>
            <StyledSVG
              color={"purple-dark"}
              width={"14px"}
              height={"14px"}
              src={minusBoldIcon}
            />
          </button>
          <span>0</span>
          <button>
            <StyledSVG
              color={"purple-dark"}
              width={"14px"}
              height={"14px"}
              src={plusBoldIcon}
            />
          </button>
        </CardAmount>
        <CardCartButton>
          <StyledSVG
            color={"purple-dark"}
            width={"19px"}
            height={"19px"}
            src={shoppingCartIcon}
          />
        </CardCartButton>
      </CardFooter>
    </CardContainer>
  );
};
