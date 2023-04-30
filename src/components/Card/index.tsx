import { StyledSVG } from "../../styles/themes/default";
import {
  CardBody,
  CardContainer,
  CardDescription,
  CardImage,
  CardTitle,
} from "./Card.styles";
export const Card = ({ item }: any) => {
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

      <CardBody>
        <CardTitle>{item?.name}</CardTitle>
        <CardDescription>{item?.description}</CardDescription>
      </CardBody>
    </CardContainer>
  );
};
