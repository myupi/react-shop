import { useEffect } from "react";
import { Button, CardImage, CardWrapper } from "./card.s";

function Card({ item, addToOrder, isInOrders }) {
  const inOrders = isInOrders(item);
  return (
    <CardWrapper>
      <CardImage>
        <img src={item.img} width="100%" />
      </CardImage>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <p style={{ fontWeight: "bold" }}>{item.price}$</p>

      <Button onClick={() => addToOrder(item)} disabled={inOrders}>
        {inOrders ? <p>В корзинке</p> : <p>+</p>}
      </Button>
    </CardWrapper>
  );
}

export default Card;
