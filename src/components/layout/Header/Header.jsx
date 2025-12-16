import { useEffect, useRef, useState } from "react";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import Order from "../../ui/Order/Order";
import { Link } from "react-router-dom";

function Header({ orders, removeFromOrder }) {
  let [cartOpen, setCartOpen] = useState(false);

  const cartRef = useRef(null);

  useEffect(() => {
    if (!cartOpen) return;

    function handleClickOutside(e) {
      if (cartOpen && cartRef.current && !cartRef.current.contains(e.target)) {
        setCartOpen(false);
      }
    }
    document.addEventListener("pointerdown", handleClickOutside);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [cartOpen]);

  return (
    <header>
      <div>
        <span className="logo">House Stuff</span>
        <ul className="nav">
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/contact">Контакты</Link>
          </li>
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
    </header>
  );
}

export default Header;
