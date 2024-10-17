import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
      products: [],
      searchTerm: '',
      sortBy: 'name',
      sortOrder: 'asc',
      editDialogOpen: false,
      productToEdit: null,
      deleteDialogOpen: false,
      productIdToDelete: null,
    },
    reducers: {
      addProduct: (state, action) => {
        state.products.push(action.payload);
      },
      editProduct: (state, action) => {
        const index = state.products.findIndex(p => p.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      },
      deleteProduct: (state, action) => {
        state.products = state.products.filter(p => p.id !== action.payload);
      },
      setSearchTerm: (state, action) => {
        state.searchTerm = action.payload;
      },
      setSortBy: (state, action) => {
        state.sortBy = action.payload;
      },
      setSortOrder: (state, action) => {
        state.sortOrder = action.payload;
      },
      openEditDialog: (state, action) => {
        state.editDialogOpen = true;
        state.productToEdit = action.payload;
      },
      closeEditDialog: (state) => {
        state.editDialogOpen = false;
        state.productToEdit = null;
      },
      openDeleteDialog: (state, action) => {
        state.deleteDialogOpen = true;
        state.productIdToDelete = action.payload;
      },
      closeDeleteDialog: (state) => {
        state.deleteDialogOpen = false;
        state.productIdToDelete = null;
      },
    },
  });
  
  export const {
    addProduct,
    editProduct,
    deleteProduct,
    setSearchTerm,
    setSortBy,
    setSortOrder,
    openEditDialog,
    closeEditDialog,
    openDeleteDialog,
    closeDeleteDialog,
  } = productSlice.actions;

export default productSlice.reducer;