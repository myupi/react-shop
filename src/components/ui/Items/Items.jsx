import Card from "../Card/Card";
import { ItemsWrapper } from "./Item.s";

function Items({ items, loading, addToOrder, orders }) {
  if (loading) {
    return <h1 style={{ textAlign: "center" }}>Loading...</h1>;
  }

  if (!items.length) {
    return <h2 style={{ textAlign: "center" }}>Товары не найдены</h2>;
  }

  return (
    <ItemsWrapper>
      {items.map((item) => {
        const inCart = orders.some((o) => o.id === item.id);

        return (
          <Card
            key={item.id}
            item={item}
            addToOrder={addToOrder}
            inCart={inCart}
          />
        );
      })}
    </ItemsWrapper>
  );
}

export default Items;
