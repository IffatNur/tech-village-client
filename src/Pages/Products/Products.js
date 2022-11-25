import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BookingModal from '../../component/BookingModal';
import ProductCard from './ProductCard';

const Products = () => {
  const [bookProduct, setBookProduct] = useState(null);
  const allProduct = useLoaderData();
  console.log(allProduct.length);
  return (
    <div>
      {allProduct.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          setBookProduct={setBookProduct}
        ></ProductCard>
      ))}
      {bookProduct && (
        <BookingModal
          bookProduct={bookProduct}
          setBookProduct={setBookProduct}
        ></BookingModal>
      )}
    </div>
  );
};

export default Products;