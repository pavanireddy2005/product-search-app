import {useState} from 'react';
import './App.css';

function ProductCard({name, price, image}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
function App() {
  const [search, setSearch] = useState("");
  const products=[
    {
      id : 1,
      name : "Laptop",
      price : 230,
      image : "/laptop.jpeg",
    },
    {
      id : 2,
      name : "Smartphone",
      price : 599,
      image : "/smartphone.avif",
    },
    {
      id : 3,
      name : "Keyboard",
      price : 349,
      image : "/keyboard.png",
    },
    {
      id : 4,
      name : "Headphones",
      price : 199,
      image : "/headphones.jpeg",
    },
  ];
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      {filteredProducts.length === 0 && <h3>No products found.</h3>}
    </div>
  );
}

export default App
