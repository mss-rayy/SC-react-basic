import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { getData } from "../../utils/api";
import CardProduct from "../../components/card/card-product";

export default function Products() {
  const { state } = useLocation();
  const location = useLocation();

  console.log("location", location);
  const [productsEachCategory, setProductsEachCategory] = useState([]);

  const getProductsByCategory = async () => {
    let data = await getData(`/products/category/${state}`);
    // set products state
    setProductsEachCategory(data.products);
  };

  // useEffect will be call automatically when component mounded
  useEffect(() => {
    getProductsByCategory();
  }, []);

  return (
    <section className="grid grid-cols-4 gap-4">
      {productsEachCategory?.map((product, index) => (
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
  );
}
