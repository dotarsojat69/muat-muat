import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm, setSortBy, setSortOrder } from '@/store/productSlice';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

function SearchSort() {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-4">
      <Input
        placeholder="Search products..."
        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        className="flex-grow sm:w-80 w-36"
      />
      <div className="flex gap-2">
      <Select onValueChange={(value) => dispatch(setSortBy(value))}>
        <SelectTrigger className="sm:w-[120px] w-24">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="price">Price</SelectItem>
          <SelectItem value="stock">Stock</SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => dispatch(setSortOrder(value))}>
        <SelectTrigger className="sm:w-[120px] w-24">
          <SelectValue placeholder="Sort order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Ascending</SelectItem>
          <SelectItem value="desc">Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
    </div>
  );
}

export default SearchSort;