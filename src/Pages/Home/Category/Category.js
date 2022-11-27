import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../../component/Loader";
import CategoryCard from "./CategoryCard";

const Category = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch(
        `https://tech-village-server-iffatnur.vercel.app/category`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative -top-36">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Category;
