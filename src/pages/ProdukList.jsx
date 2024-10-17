
import Navbar from "../components/Navbar";
import Modal from "react-modal";
import ProdukCard from "../components/ProdukCard";
import AddEditProduk from "../pages/AddEditProduk";
import { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import ProdukSorting from "../components/ProdukSorting";

const ProdukList = () => {

  const [produk, setProduk] = useState([]);
  const [searchTerm, SetSearchTerms] = useState('');
  const [sortedProduk, setSortedProduk] = useState([]);

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
});

  useEffect(() => {
    setSortedProduk(produk);
  }, [produk]);

  const handleEditProduk = (editProduk) => {
    setProduk(produks.map(p => (p.id === editProduk.id ? editProduk : p)));
  };

  const handleDeleteProduk = (id) => {
    setProduk(produks.filter(p => p.id !== id));
  };

  return (
    <>
      <Navbar />

      {/* <ProdukSorting
        setSortedProduk={setSortedProduk}
        produk={produk}
      /> */}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        

            <ProdukCard
            
            />
        
    </div>

      <button 
        className='w-16 h-16 flex bg-blue-400 items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10'
        onClick={() => {
            setOpenAddEditModal({ isShown: true, type: "add", data: null});
        }}>
            <MdAdd className='text-[32px] text-white' />
        </button>

    <Modal isOpen={openAddEditModal.isShown}
            onRequestClose={() => {}}
            style={{
                overlay: {
                    backgroundColor: "rgba(0,0,0,0.2)",
                },
            }}
            contenLabel=""
            className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 shadow"
        >
      <AddEditProduk 
      type={openAddEditModal.type}
      produkData={openAddEditModal.data}
      onClose={() => {
          setOpenAddEditModal({ isShown: false, type: "add", data: null });
      }}
      />
    </Modal>
    </>
  );
};

export default ProdukList