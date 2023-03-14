import { Card } from "../../components/Card";
import { coffees } from "./../../mocks/cards";
export const Home = () => {
  return (
    <>
      {coffees.map((coffee) => {
        return <Card key={coffee.id} item={coffee} />;
      })}
    </>
  );
};
