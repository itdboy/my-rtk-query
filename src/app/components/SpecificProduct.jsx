import { useGetProductByIdQuery } from "../service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(5);

  console.log(data);

  if (isError) {
    return <h1>Sorry, Something happen</h1>;
  }

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <>
      <h1>{data?.brand}</h1>
      <h1>{data?.category}</h1>
      <h1>{data?.description}</h1>
    </>
  );
};

export default SpecificProduct;
