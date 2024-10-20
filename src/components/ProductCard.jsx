import React from 'react'
import { useDispatch } from 'react-redux'
import { Card, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { openDeleteDialog, openEditDialog } from '@/store/productSlice'

function ProdukCard ({ product }) {
    const dispatch = useDispatch();

    const handleEdit = () => {
        dispatch(openEditDialog(product));
      };
    
      const handleDelete = () => {
        dispatch(openDeleteDialog(product.id));
      };

    return (
      <Card className="w-full max-w-sm shadow drop-shadow bg-slate-100">
        <CardContent className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-2">Price: Rp {product.price.toFixed(2)}</p>
          <p className="text-gray-600">Stock: {product.stock}</p>
        </CardContent>
        <CardFooter className="flex justify-end space-x-2 p-4">
          <Button
            variant="outline-none" 
            size="icon"
            onClick={handleEdit}
          >
            <FaEdit className="h-6 w-6 text-blue-700 hover:text-blue-700" />
          </Button>
          <Button 
            variant="outline-none" 
            size="icon"
            onClick={handleDelete}
          >
            <FaTrash className="h-6 w-6 text-red-700 hover:text-red-700" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

export default ProdukCard;