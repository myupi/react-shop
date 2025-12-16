import { AiOutlineDelete } from "react-icons/ai";
import { OrderWrapper } from "./Order.s";

function Order({ item, removeFromOrder }) {
  const { id, img, title, price } = item;
  return (
    <OrderWrapper>
      <img src={img} alt={title} />
      <div>
        <h2>{title}</h2>
        <b>{price}$</b>
      </div>
      <AiOutlineDelete
        size={25}
        style={{ marginBottom: 10 }}
        onClick={() => removeFromOrder(id)}
      />
    </OrderWrapper>
  );
}

export default Order;
