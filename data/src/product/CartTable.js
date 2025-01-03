import React, { useState, useEffect } from "react";

const CartsPage = () => {
  const [carts, setCarts] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [filteredCarts, setFilteredCarts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => {
        setCarts(data.carts);
        setFilteredCarts(data.carts); // Initially display all carts
      });
  }, []);

  const handleSearch = () => {
    if (searchId.trim()) {
      const cart = carts.filter((cart) => cart.id === parseInt(searchId));
      setFilteredCarts(cart); // Filter carts based on ID
    } else {
      setFilteredCarts(carts); // Show all carts if no ID is entered
    }
  };

  return (
    <div>
      <h2>Cart Details</h2>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by Cart ID"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Display cart details in a table */}
      {filteredCarts.length > 0 ? (
        filteredCarts.map((cart) => (
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
        ))
      ) : (
        <p>No cart found with ID {searchId}</p>
      )}
    </div>
  );
};

export default CartsPage;
