import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

export default function CardProduct({ image, title, price, rating, id }) {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${id}`}>
        <img
          class="p-8 rounded-t-lg h-[280px] w-full object-cover"
          src={image}
          alt="product image"
        />
      </Link>
      <div class="px-5 pb-5">
        <a href="#">
          <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
          <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
            <FaStar className="text-amber-300" />
          </div>
          <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}
          </span>
        </div>
        <div class="flex items-center justify-between">
          <span class="text-3xl font-bold text-gray-900 dark:text-white">
            $ {price}
          </span>
          <a
            href="#"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
