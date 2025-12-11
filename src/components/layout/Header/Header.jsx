import { useEffect, useRef, useState } from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../../ui/Order/Order";

function Header({ orders, removeFromOrder }) {
  let [cartOpen, setCartOpen] = useState(false);

  const cartRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <header>
      <div>
        <span className="logo">House Stuff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>
            <FaShoppingCart
              size={25}
              onClick={() => setCartOpen((cartOpen) => !cartOpen)}
              className={`${cartOpen && "active"}`}
            />
          </li>

          {cartOpen && (
            <div className="shop-cart" ref={cartRef}>
              {orders.length ? (
                orders.map((el) => (
                  <Order
                    key={el.id}
                    item={el}
                    removeFromOrder={removeFromOrder}
                  />
                ))
              ) : (
                <p style={{ color: "#000", textAlign: "center" }}>
                  Корзина пуста
                </p>
              )}
              {orders.length ? (
                <p style={{ color: "#000", float: "right", fontWeight: "700" }}>
                  Общая сумма:{" "}
                  {orders
                    .reduce((sum, el) => sum + parseFloat(el.price), 0)
                    .toFixed(2)}
                  $
                </p>
              ) : null}
            </div>
          )}
        </ul>
      </div>
      <div className="presentation">
        <h1>Лучшие товары по низким ценам</h1>
        <p>по низким ценам</p>
      </div>
    </header>
  );
}

export default Header;
