import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';

const Products = () => {
    const allProduct = useLoaderData();
    console.log(allProduct.length);
    return (
        <div>
            {
                allProduct.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;