import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useSelector(state => state);
  const selectedProduct = products.find(product => product._id === id)
  return (
    <>
      <h1>{selectedProduct.name}</h1>
    </>
  )
};

export default ProductDetails;
