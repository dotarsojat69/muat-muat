import React from 'react'
import { AlertDialog,
    AlertDialogAction,
    AlertDialogCancel, 
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from './ui/alert-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { closeDeleteDialog, deleteProduct } from '@/store/productSlice';
import { toast } from 'sonner';

const DeleteProdukDialog = () => {
    const dispatch = useDispatch();
    const { deleteDialogOpen, productIdToDelete } = useSelector(state => state.products);
  
    const handleDelete = () => {
      dispatch(deleteProduct(productIdToDelete));
      dispatch(closeDeleteDialog());
      toast("Product deleted successfully")
    };
  
    return (
      <AlertDialog open={deleteDialogOpen} onOpenChange={() => dispatch(closeDeleteDialog())}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to delete this product?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the product from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-600 hover:bg-red-800" onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }

export default DeleteProdukDialog