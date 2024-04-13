import { useDeleteProductMutation } from "../service/dummyData";

const DeleteProduct = ({ productId }) => {
  const [deleteProduct, { data, isError, isLoading }] =
    useDeleteProductMutation();

  if (isError) {
    return <h1>Sorry, Something happen</h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  const handleDeleteProduct = async () => {
    try {
      await deleteProduct(productId);
    } catch (error) {
      console.error("Error adding new product", error);
    }
  };

  return (
    <>

     <h1>{data?.title ? `${data.title} successfully deleted `: "" }</h1>
      <button onClick={handleDeleteProduct} disabled={isLoading}>
        Delete Product
      </button>
    </>
  );
};

export default DeleteProduct;
