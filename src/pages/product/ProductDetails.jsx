import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getData } from "../../utils/api";
import { CardProductDetails } from "../../components/card/card-product-detail";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const getProductById = async () => {
    const data = await getData(`/products/${id}`);

    setProduct(data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  console.log("product: ", product);
  return (
    <section className="max-w-screen-xl mx-auto">
      <CardProductDetails
        title={product.title}
        thumbnail={product.thumbnail}
        description={product.description}
        price={product.price}
        rating={product.rating}
        warrantyInformation={product.warrantyInformation}
        reviews={product.reviews}
        returnPolicy={product.returnPolicy}
        stock={product.stock}
        category={product.category}
      />
    </section>
  );
}
