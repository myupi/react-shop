import { useState } from "react";

import { removeFromOrders } from "./utils";
import { Route, Routes } from "react-router-dom";
import { AppWrapper } from "./App.s";

import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";

function App() {
  const [orders, setOrders] = useState([]);

  const handleRemove = (id) => {
    setOrders((prev) => removeFromOrders(prev, id));
  };

  return (
    <AppWrapper>
      <Header orders={orders} removeFromOrder={handleRemove} />
      <Routes>
        <Route
          path="/"
          element={<MainPage orders={orders} setOrders={setOrders} />}
        />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </AppWrapper>
  );
}

export default App;
