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
  CartDeleteButton,
  CartInput,
  CartPaymentButton,
} from "./Cart.styles";
import { StyledSVG } from "../../styles/themes/default";
import { CardAmount } from "../../components/Card/Card.styles";
import plusBoldIcon from "../../assets/images/icons/plus-bold.svg";
import trashIcon from "../../assets/images/icons/trash-regular.svg";
import minusBoldIcon from "../../assets/images/icons/minus-bold.svg";
import { useNavigate } from "react-router-dom";
import locationIcon from "../../assets/images/icons/map-pin-line-regular.svg";
import coinIcon from "../../assets/images/icons/currenc-dollar-regular.svg";
import moneyIcon from "../../assets/images/icons/money-regular.svg";
import bankIcon from "../../assets/images/icons/bank-regular.svg";
import creditIcon from "../../assets/images/icons/credit-card-regular.svg";

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
    const newTotal = value + 3.5;
    setTotal(newTotal.toString().substring(0, 5));
  };

  const handleCoffeeAmount = (item: any, type: string) => {
    if (item.amount >= 1) {
      if (type === "add") {
        item.amount = item.amount + 1;
      } else {
        if (item.amount > 1) {
          item.amount = item.amount - 1;
        }
      }
    }

    const newCart = currentCart.map((cartItem) => {
      if (cartItem.id === item.id) {
        return item;
      }
    });

    setCurrentCart(newCart);
    handleSubtotal(newCart);
  };

  const handleDeleteItem = (currentItem: any) => {
    const newCart = cart;

    const objWithIdIndex = newCart.findIndex(
      (obj) => obj.id === currentItem.id
    );

    if (objWithIdIndex > -1) {
      newCart.splice(objWithIdIndex, 1);
    }

    setCurrentCart(newCart);
    handleSubtotal(newCart);
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <CartContainer>
      <div>
        <h2>Complete seu pedido</h2>

        <CartAddress>
          <div className="details">
            <StyledSVG
              color={"yellow-dark"}
              width={"22px"}
              height={"22px"}
              src={locationIcon}
            />
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
          <CartInput type="text" placeholder="CEP" width={"200px"} />
          <CartInput type="text" placeholder="Rua" width={"100%"} />
          <div className="group">
            <CartInput type="text" placeholder="Número" width={"200px"} />
            <CartInput type="text" placeholder="Complemento" />
          </div>

          <div className="group">
            <CartInput type="text" placeholder="Bairro" width={"200px"} />
            <CartInput type="text" placeholder="Cidade" />
            <CartInput type="text" placeholder="UF" width={"60px"} />
          </div>
        </CartAddress>

        <CartAddress>
          <div className="details">
            <StyledSVG
              color={"purple"}
              width={"22px"}
              height={"22px"}
              src={coinIcon}
            />
            <div>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>

              <div className="payment">
                <CartPaymentButton>
                  <StyledSVG
                    color={"purple"}
                    width={"22px"}
                    height={"22px"}
                    src={moneyIcon}
                  />
                  <p>Cartão de crédito</p>
                </CartPaymentButton>
                <CartPaymentButton>
                  <StyledSVG
                    color={"purple"}
                    width={"22px"}
                    height={"22px"}
                    src={bankIcon}
                  />
                  <p>cartão de débito</p>
                </CartPaymentButton>
                <CartPaymentButton>
                  <StyledSVG
                    color={"purple"}
                    width={"22px"}
                    height={"22px"}
                    src={creditIcon}
                  />
             
                  <p>dinheiro</p>
                </CartPaymentButton>
              </div>
            </div>
          </div>
        </CartAddress>
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
                          <button
                            onClick={() => {
                              handleCoffeeAmount(item, "remove");
                            }}
                          >
                            <StyledSVG
                              color={"purple-dark"}
                              width={"14px"}
                              height={"14px"}
                              src={minusBoldIcon}
                            />
                          </button>
                          <span>{item.amount}</span>
                          <button
                            onClick={() => {
                              handleCoffeeAmount(item, "add");
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
                        <CartDeleteButton
                          onClick={() => {
                            handleDeleteItem(item);
                          }}
                        >
                          <StyledSVG
                            color={"purple-dark"}
                            width={"14px"}
                            height={"14px"}
                            src={trashIcon}
                          />
                          REMOVER
                        </CartDeleteButton>
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
              <CartConfirm
                onClick={() => {
                  goToCheckout();
                }}
              >
                confirmar pedido
              </CartConfirm>
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
