import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => item);
    // const bestProduct = Array.isArray(products)
    //   ? products.filter((item) => item.bestseller)
    //   : [];
    console.log(products);
    setBestSeller(bestProduct.slice(0, 5));
    console.log(bestSeller);
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Tittle text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto test-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ut
          minima dignissimos, est iste repudiandae nam, quo debitis deleniti
          magnam eum nobis, tenetur nihil a quasi. Aut ad eligendi et!
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            img={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
