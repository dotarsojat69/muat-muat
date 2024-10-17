import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { MdClose } from 'react-icons/md'

const AddEditProduk = ({ produkData, onClose, onSubmit }) => {

    const [nama, setNama] = useState(produkData?.nama || "");
    const [harga, setHarga] = useState(produkData?.harga ||"");
    const [stok, setStok] = useState(produkData?.stok || "");
    const [produk, setProduk] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAddProduk = (produk) => {
        setProduk([...produks, produk]);
      };

  return (
    <div className='relative'>
        <button className='w-10 h-10 rounded-full flex items-center justify-center absolute -top-3 -right-3'
        onClick={onClose}>
            <MdClose className='text-xl text-slate-500' />
        </button>

    <form onSubmit={handleSubmit(onSubmit)}
        className='space-y-6 p-4 bg-white rounded'>
        <div className='flex flex-col gap-2'>
            <label className='input-label'>Nama Produk</label>
            <input {...register("nama", { required: "Nama Produk is required"})}
            type="text"
            className='text-sm outline-none'
            value={nama}
            placeholder='Kabel'
            onChange={({ target }) => setNama(target.value)}
            />
            {errors.nama && <span className='text-red-500'>{errors.nama.message}</span>}
        </div>

        <div className='flex flex-col gap-2 mt-4'>
            <label className="input-label">Harga Produk</label>
            <input {...register("harga", { required: "Harga Produk is required", min: 1})}
            type="number"
            className='text-sm outline-none'
            value={harga}
            onChange={({ target }) => setHarga(target.value)}
            placeholder='50.000'
            />
            {errors.nama && <span className='text-red-500'>{errors.harga.message}</span>}
        </div>

        <div className='flex flex-col gap-2 mt-3'>
            <label className="input-label">Stok Barang</label>
            <input {...register("stok", { required: "Stok Barang is required", min: 0})}
               type='number'
               className='text-base outline-none'
               value={stok}
               placeholder='5'
               onChange={({ target }) => setStok(target.value)}
            />
            {errors.stok && <span className='text-red-500'>{errors.stok.message}</span>}
        </div>
        <button type='submit' onClick={handleAddProduk}
         className='bg-blue-500 text-white px-4 py-2 rounded'>
            Tambah Produk
        </button>
    </form>
        
    </div>
  )
}

export default AddEditProduk