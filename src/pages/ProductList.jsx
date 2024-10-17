import ProdukCard from '@/components/ProductCard';
import React from 'react';
import { useSelector } from 'react-redux';


function ProdukList() {
  const { products, searchTerm, sortBy, sortOrder } = useSelector(state => state.products);

  const filteredAndSortedProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortBy] - b[sortBy];
      } else {
        return b[sortBy] - a[sortBy];
      }
    });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
      {filteredAndSortedProducts.map(product => (
        <ProdukCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProdukList;