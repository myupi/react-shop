import { addToOrders } from "../utils";
import Items from "../components/ui/Items/Items";
import axios from "axios";
import { useEffect, useState } from "react";
import Showcase from "../components/ui/Showcase/Showcase";

function MainPage({ orders, setOrders }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchItems() {
    try {
      setLoading(true);
      const res = await axios.get("https://junior-data.netlify.app/data.json");
      setItems(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = (item) => {
    setOrders((prev) => addToOrders(prev, item));
  };

  return (
    <>
      <Showcase />
      <Items
        items={items}
        loading={loading}
        addToOrder={handleAdd}
        orders={orders}
      />
    </>
  );
}

export default MainPage;











