import { Button, CardImage, CardWrapper } from "./card.s";

function Card({ item, addToOrder, inCart }) {
  const { img, title, desc, price } = item;
  return (
    <CardWrapper>
      <CardImage>
        <img src={img} width="100%" alt={title} />
      </CardImage>
      <h2>{title}</h2>
      <p>{desc}</p>
      <b>{price}$</b>

      <Button onClick={() => addToOrder(item)} disabled={inCart}>
        {inCart ? <p>В корзинке</p> : <p>+</p>}
      </Button>
    </CardWrapper>
  );
}

export default Card;
