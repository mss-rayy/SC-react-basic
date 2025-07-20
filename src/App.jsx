import React, { useEffect, useState } from "react";
import CardProduct from "./components/card/card-product.jsx";
import { getData } from "./utils/api.js";
import CardCategory from "./components/card/card-category.jsx";
import { useNavigate } from "react-router";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const getProducts = async () => {
    let data = await getData("/products");

    let categories = await getData("/products/categories");
    // set products state
    // console.log(data.products);
    setProducts(data.products);
    setCategories(categories);
    console.log(categories);
  };

  // useEffect will be call automatically when component mounded
  useEffect(() => {
    console.log("Called");
    getProducts();
  }, []);

  const handleGetCategory = (category) => {
    navigate("/products", { state: category });
  };

  return (
    <>
      {/* banner */}
      <img
        className="w-full h-[400px] object-cover mb-5"
        src="/public/banner.jpg"
        alt="banner"
      />
      <main className="max-w-screen-xl mx-auto">
        {/* categories section */}
        <section>
          {categories.map((category, index) => (
            <CardCategory
              key={index}
              getCategory={() => handleGetCategory(category.slug)}
              name={category.name}
            />
          ))}
        </section>
        {/* product section */}
        <section className="grid grid-cols-4 gap-4">
          {products.map((product, index) => (
            <CardProduct
              key={index}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              rating={product.rating}
              id={product.id}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
// background-color
