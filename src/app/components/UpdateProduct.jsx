import { useUpdateProductMutation } from "../service/dummyData";

const UpdateProduct = ({ productId }) => {
    
  const [updateProduct, { data, isError, isLoading }] =
    useUpdateProductMutation();

  if (isError) {
    return <h1>Sorry, We got some error</h1>;
  }

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  const handleUpdateProduct = async () => {
    try {
      const updatedProductData = {
        title: "1234   💛💛💛 ",
      };

      await updateProduct({
        id: productId,
        updatedProduct: updatedProductData,
      });
    } catch (error) {
      console.error("Error adding new product", error);
    }
  };

  return (
    <>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <button onClick={handleUpdateProduct} disabled={isLoading}>
        Update Product
      </button>
    </>
  );
};

export default UpdateProduct;
