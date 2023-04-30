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


import { useState } from "react";
import { useCart } from "../../hooks/CartContext";

export const Card = ({ item }: any) => {
  const [coffeeAmount, setCoffeeAmount] = useState(0);

  const {addToCart} = useCart()

  const handleCoffeeAmount = (type: string) => {
    if (coffeeAmount >= 0) {
      if (type === "add") {
        setCoffeeAmount(coffeeAmount + 1);
      } else {
        if (coffeeAmount > 0) {
          setCoffeeAmount(coffeeAmount - 1);
        }
      }
    }
  };



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

      <p>
        {item.tags.map((tag: string) => (
          <CardTag>{tag.toUpperCase()}</CardTag>
        ))}
      </p>
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
          <button
            onClick={() => {
              handleCoffeeAmount("remove");
            }}
          >
            <StyledSVG
              color={"purple-dark"}
              width={"14px"}
              height={"14px"}
              src={minusBoldIcon}
            />
          </button>
          <span>{coffeeAmount}</span>
          <button
            onClick={() => {
              handleCoffeeAmount("add");
            }}
          >
            <StyledSVG
              color={"purple-dark"}
              width={"14px"}
              height={"14px"}
              src={plusBoldIcon}
            />
          </button>
        </CardAmount>
        <CardCartButton onClick={() => {
          addToCart(item, coffeeAmount)
        }}>
          <StyledSVG
            color={"white"}
            width={"19px"}
            height={"19px"}
            src={shoppingCartIcon}
          />
        </CardCartButton>
      </CardFooter>
    </CardContainer>
  );
};
