import React, { useEffect, useState } from "react";
import Card from "./ui/Card/Card";
import styled from "styled-components";
import axios from "axios";

const ItemsWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;
function Items({ items, loading, addToOrder, orders }) {
  const isInOrders = (item) => {
    return orders.some((orderItem) => orderItem.id === item.id);
  };

  return loading ? (
    <h1 style={{ textAlign: "center" }}>Loading...</h1>
  ) : (
    <ItemsWrapper>
      {items.map((item) => (
        <Card
          key={item.id}
          item={item}
          addToOrder={addToOrder}
          isInOrders={isInOrders}
        />
      ))}
    </ItemsWrapper>
  );
}

export default Items;

