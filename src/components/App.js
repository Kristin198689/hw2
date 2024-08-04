import React from "react";
import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";


function App() {
  const orders = [
    { orderId: 123, status: 'в пути' },
    { orderId: 124, status: 'доставлен' }
  ];

  return (
    <div className="App">
      <Greeting name=" hallo" />
      <ShoppingList items={['Хлеб', 'Молоко', 'Яйца']} />
      {orders.map((order, index) => (
        <OrderStatus key={index} orderId={order.orderId} status={order.status} />
      ))}
    </div>
  );
}

export default App;
