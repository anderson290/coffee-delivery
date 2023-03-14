import {
  CardBody,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "./Card.styles";
import image from "../../assets/images/coffee/Expresso.svg";
export const Card = ({ item }: any) => {
  return (
    <CardContainer>
      <CardImage src={image} alt="" />
      <CardBody>
        <CardTitle>{item?.name}</CardTitle>
        <CardDescription>{item?.description}</CardDescription>
      </CardBody>
    </CardContainer>
  );
};
