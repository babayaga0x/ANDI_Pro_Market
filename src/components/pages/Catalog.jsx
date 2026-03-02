import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Catalog.css";

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Ошибка загрузки каталога", err));
  }, []);

  return (
    <main>
      <h2>Product Catalog</h2>
      <p>View our product range.</p>

      <div className="gallery">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <div className="product-image-wrapper">
              <img
                src={`/images/${p.image}`}
                alt={p.name}
                className="product-image"
              />
            </div>

            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <strong className="price">{p.price} ₽</strong>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Catalog;
