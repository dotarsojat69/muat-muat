import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FaPlus } from 'react-icons/fa';
import { addProduct } from '@/store/productSlice';

function AddEditProduk() {
  const dispatch = useDispatch();
  const form = useForm({
    defaultValues: {
      name: '',
      price: '',
      stock: '',
    },
  });

  const onSubmit = (data) => {
    dispatch(addProduct({
      id: Date.now(),
      name: data.name,
      price: parseFloat(data.price),
      stock: parseInt(data.stock),
    }));
    form.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed bottom-4 right-4 rounded-full w-12 h-12 shadow-lg">
          <FaPlus />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: 'Product name is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              rules={{ 
                required: 'Price is required',
                pattern: {
                  value: /^\d+(\.\d{1,2})?$/,
                  message: 'Please enter a valid price'
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input type="number" step="0.01" placeholder="Enter price" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stock"
              rules={{ 
                required: 'Stock is required',
                pattern: {
                  value: /^\d+$/,
                  message: 'Please enter a valid stock number'
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stock</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="Enter stock" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add Product</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddEditProduk;