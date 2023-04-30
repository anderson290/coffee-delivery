import expresso from "../assets/images/coffee/Expresso.svg";
import americano from "../assets/images/coffee/Americano.svg";
import cremoso from "../assets/images/coffee/Expresso Cremoso.svg";
import expressoGelado from "../assets/images/coffee/Café Gelado.svg";

export const coffeeList = [
  {
    id: 0,
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    price: "9.90",
    tags: ["TRADICIONAL"],
    localImage: expresso,
    amount: 0
  },
  {
    id: 1,
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    price: "9.90",
    tags: ["TRADICIONAL"],
    localImage: americano,
    amount: 0
  },

  {
    id: 2,
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    price: "9.90",
    tags: ["TRADICIONAL"],
    localImage: cremoso,
    amount: 0
  },

  {
    id: 3,
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: "9.90",
    tags: ["TRADICIONAL", "GELADO"],
    localImage: expressoGelado,
    amount: 0
  },
];
