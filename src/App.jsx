import { Provider } from "react-redux"
import store from "./store"
import AddEditProduk from "./pages/AddEditProduct"
import ProdukList from "./pages/ProductList"
import Navbar from "./components/Navbar"
import EditProdukDialog from "./components/EditProductDialog"
import DeleteProdukDialog from "./components/DeleteProductDialog"

const App = () => {
  return (
    <Provider store={store}>
        <Navbar />
      <div className="container mx-auto px-4 py-8">
        
        <div className="space-y-6">
        
        <AddEditProduk />
        <ProdukList />
        <EditProdukDialog />
        <DeleteProdukDialog />
      </div>
      </div>
    </Provider>
  );
}

export default App