import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Tittle from "./Tittle";
import ProductItem from "./ProductItem";
import Simer from "./Simer";

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
  // if (bestSeller.length == 0) return <h1>Ankit Loading...</h1>;
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Tittle text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          The Best Seller Products section highlights the most popular and
          high-demand items, showcasing top-quality products loved by customers.
          Each product is presented with its image, name, and price, emphasizing
          its premium status and appeal.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.length != 0 ? (
          bestSeller.map((item, index) => (
            <ProductItem
              key={index}
              id={item._id}
              img={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        ) : (
          <div className="overflow-hidden w-[100vw] gap-2 ">
            
          {arr.map((a)=>(
            <Simer/>
          ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
