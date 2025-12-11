import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import Items from "./components/Items";
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const AppWrapper = styled.div`
  width: 1280px;
  margin: 50px auto;
`;

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

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

  const addToOrder = (item) => {
    const findItem = orders.find((o) => o.id === item.id);
    if (!findItem) {
      setOrders([...orders, item]);
    }
  };

  const removeFromOrder = (id) => {
    setOrders(orders.filter((item) => item.id !== id));
  };
  return (
    <AppWrapper>
      <Header orders={orders} removeFromOrder={removeFromOrder} />
      <Items
        items={items}
        loading={loading}
        addToOrder={addToOrder}
        orders={orders}
      />
      <Footer />
    </AppWrapper>
  );
}

export default App;
