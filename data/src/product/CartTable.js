import React, { useState, useEffect } from "react";

const CartsPage = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => setCarts(data.carts));
  }, []);

  return (
    <div>
      <h2>Cart Details</h2>
      {carts.map((cart) => (
        <div key={cart.id} style={{ marginBottom: "20px" }}>
          <h3>Cart ID: {cart.id}</h3>
          <table border="1" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Discount Percentage</th>
                <th>Discounted Total</th>
                <th>Thumbnail</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>${product.price.toFixed(2)}</td>
                  <td>{product.quantity}</td>
                  <td>${product.total.toFixed(2)}</td>
                  <td>{product.discountPercentage}%</td>
                  <td>${product.discountedTotal.toFixed(2)}</td>
                  <td>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      width="50"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default CartsPage;
