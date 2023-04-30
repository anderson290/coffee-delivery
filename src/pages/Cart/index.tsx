import { useEffect, useState } from "react";
import { useCart } from "../../hooks/CartContext";
import {
  CartAddress,
  CartContainer,
  CartItemPrice,
  CartItems,
  CartItemDescription,
  CartItem,
  CartItemName,
  CartEmpty,
  CartConfirm,
  CartSubTotal,
  CartTotal,
  CardAmountContainer,
} from "./Cart.styles";
import { StyledSVG } from "../../styles/themes/default";
import { CardAmount } from "../../components/Card/Card.styles";
import plusBoldIcon from "../../assets/images/icons/plus-bold.svg";
import minusBoldIcon from "../../assets/images/icons/minus-bold.svg";
import { useNavigate } from "react-router-dom";
export const Cart = () => {
  const { cart } = useCart();
  const [currentCart, setCurrentCart] = useState<any[]>([]);
  const [subtotal, setSubtotal] = useState<string>("0.00");
  const [total, setTotal] = useState<string>("3.50");

  const navigate = useNavigate();

  useEffect(() => {
    const cartData = cart.filter((item, index) => cart.indexOf(item) === index);
    setCurrentCart(cartData);
    handleSubtotal(cartData);
  }, []);

  const handleSubtotal = (subtotalData: any[]) => {
    let value = 0;
    subtotalData.forEach((item) => {
      value = parseFloat(item.price) * item.amount;
    });
    setSubtotal(value.toString().substring(0, 5));
    handleTotal(value);
  };

  const handleTotal = (value: number) => {
    const newTotal = value + 3.50
    setTotal(newTotal.toString().substring(0, 5))
  };

  const handleDeleteItem = (currentItem: any) => {
    const newCart = cart;

    const objWithIdIndex = newCart.findIndex((obj) => obj.id === currentItem.id);

    if (objWithIdIndex > -1) {
      newCart.splice(objWithIdIndex, 1);
    }
  
    setCurrentCart(newCart);
    handleSubtotal(newCart);
  };

  const goToCheckout = () => {
    navigate('/checkout')
  };

  return (
    <CartContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <CartAddress></CartAddress>
      </div>

      <div>
        <h2>Cafés selecionados</h2>

        {currentCart?.length > 0 && (
          <>
            <CartItems>
              {currentCart?.map((item) => {
                return (
                  <CartItem key={item.id}>
                    <StyledSVG
                      color={"base-text"}
                      width={"64px"}
                      height={"64px"}
                      src={item.localImage}
                    />
                    <CartItemDescription>
                      <CartItemName>{item.name}</CartItemName>

                      <CardAmountContainer>
                        <CardAmount>
                          <button onClick={() => {}}>
                            <StyledSVG
                              color={"purple-dark"}
                              width={"14px"}
                              height={"14px"}
                              src={minusBoldIcon}
                            />
                          </button>
                          <span>{item.amount}</span>
                          <button onClick={() => {}}>
                            <StyledSVG
                              color={"purple-dark"}
                              width={"14px"}
                              height={"14px"}
                              src={plusBoldIcon}
                            />
                          </button>
                        </CardAmount>
                        <button
                          onClick={() => {
                            handleDeleteItem(item);
                          }}
                        >
                          Delete
                        </button>
                      </CardAmountContainer>
                    </CartItemDescription>
                    <CartItemPrice>R$ {item.price}</CartItemPrice>
                  </CartItem>
                );
              })}
              <CartSubTotal>
                <p>Total de itens</p>
                <p>R$ {subtotal}</p>
              </CartSubTotal>
              <CartSubTotal>
                <p>Entrega</p>
                <p>R$ 3.50</p>
              </CartSubTotal>
              <CartTotal>
                <p>Total</p>
                <p>R$ {total}</p>
              </CartTotal>
              <CartConfirm onClick={() => {
                goToCheckout()
              }}>confirmar pedido</CartConfirm>
            </CartItems>
          </>
        )}

        {!currentCart ||
          (currentCart.length === 0 && (
            <CartItems>
              <CartEmpty>Carrinho Vazio</CartEmpty>
            </CartItems>
          ))}
      </div>
    </CartContainer>
  );
};
