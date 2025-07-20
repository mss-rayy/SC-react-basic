import React from "react";
import { useNavigate } from "react-router";

export default function CardCategory({ name, getCategory }) {
  return (
    <button
      onClick={getCategory}
      className="px-2.5 m-2 py-2 bg-teal-100 hover:bg-teal-200 text-teal-700 rounded-md"
    >
      {name}
    </button>
  );
}
