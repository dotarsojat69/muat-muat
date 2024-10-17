import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const ProdukCard = ({ nama, harga, stok, onEdit, onDelete}) => {

  return (
    <div className='max-w-sm rounded overflow-hidden shadow p-4 bg-white mt-5 ml-5'>
        <h2 className='text-lg'>Nama : {nama}</h2>
        <p className='text-slate-500 text-base '>Harga : Rp{harga}</p>
        <p className={`text-base ${stok > 0 ? 'text-green-500' : 'text-red-500'}`}>
            Stok : {stok > 0 ? stok : 'Stok kosong'}
        </p>

        <div className='flex justify-end mt-4 gap-4'>
            <button className=' text-blue-500 rounded hover:text-blue-700'
            onClick={onEdit}>
                <FaEdit className='w-6 h-6'/>
            </button>
            <button className=' text-red-500 w-16 rounded hover:text-red-700'
            onClick={onDelete}>
                <MdDelete className='w-6 h-6'/>
            </button>
        </div>
    </div>
  )
}

export default ProdukCard