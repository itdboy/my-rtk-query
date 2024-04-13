// import AddNewProduct from "./app/components/AddNewProduct";
// import UpdateProduct from "./app/components/UpdateProduct";
// import AllProducts from "./app/components/AllProducts";
// import SpecificProduct from "./app/components/SpecificProduct";

import DeleteProduct from "./app/components/DeleteProduct";

const App = () => {
  return (
    <div>
      {/* <AllProducts /> */}
      {/* <SpecificProduct   /> */}
      {/* <AddNewProduct/> */}
      {/* <UpdateProduct productId={4}/> */}
      <DeleteProduct productId={2} />
    </div>
  );
};

export default App;
