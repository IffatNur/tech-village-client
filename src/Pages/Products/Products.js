import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import BookingModal from '../../component/BookingModal';
import useTitle from '../../Title/Title';
import ProductCard from './ProductCard';

const Products = () => {
  useTitle("Products");
  const [bookProduct, setBookProduct] = useState(null);
  const allProduct = useLoaderData();
  return (
    <div>
      {allProduct.map((product) => (
          !product.status && <ProductCard
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