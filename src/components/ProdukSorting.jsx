import React from 'react'

const ProdukSorting = ({ setSortedProduk, produks }) => {

    const handleSort = (type, order) => {
        const sorted = [...produks].sort((a,b) => {
            if(type === "harga") return order === "asc" ? a.harga - b.harga : b.harga - a.harga;
            if(type === "stok") return order === "asc" ? a.stok -b.stok : b.stok - a.stok;
            return 0;
        });
        setSortedProduk(sorted);
    };

  return (
    <div className='flex gap-4 mb-4'>
        <button onClick={() => handleSort("harga", "asc")}
            className='bg-slate-200 px-4 py-2 rounded'
        >
            Harga Naik
        </button>

        <button onClick={() => handleSort("harga", "desc")}
            className='bg-slate-200 px-4 py-2 rounded'
        >
            Harga Turun
        </button>

        <button onClick={() => handleSort("stok", "asc")}
            className='bg-slate-200 px-4 py-2 rounded'
        >
            Stok Naik
        </button>

        <button onClick={() => handleSort("stok", "desc")}
            className='bg-slate-200 px-4 py-2 rounded'
        >
            Stok Turun
        </button>
    </div>
  )
}

export default ProdukSorting