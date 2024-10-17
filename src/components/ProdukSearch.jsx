import React from 'react'

const ProdukSearch = ({ SetSearchTerms }) => {
  return (
    <div className='flex items-center'>
        <input type="text" 
           placeholder='Cari Produk'
           onChange={(e) => SetSearchTerms(e.target.value)}
           className='p-2 w-80 mb-4 shadow rounded outline-none'
        />
    </div>
  );
};

export default ProdukSearch