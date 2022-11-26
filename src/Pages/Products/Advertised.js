import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../component/Loader";
import ProductCard from "./ProductCard";

const Advertised = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="flex w-3/4 mx-auto p-4 space-x-4 bg-gradient-to-r from-gray-400 to-gray-900 overflow-x-scroll mb-20">
        {products.map(
          (product, i) =>
             (
              <>
                <div className="carousel-item">
                  <ProductCard key={i} product={product}></ProductCard>
                </div>
              </>
            )
        )}
        {/* carousel carousel-center */}
      </div>
    </div>
  );
};

export default Advertised;
