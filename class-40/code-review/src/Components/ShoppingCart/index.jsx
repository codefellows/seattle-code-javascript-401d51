import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../store/cart';

const ShoppingCart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      <h1>ShoppingCart</h1>
      <h3>items:</h3>
      {
        cart.length > 0 ? cart.map((item, idx) => (
          <p key={`shoppingCart-${idx}`}>
            {item.name} ${item.price} {'--------'}
            <span
                onClick={() => dispatch(removeProduct(item))}
                className="remove"
                // styling here is UGLY.  class is in another component - bad
              >
                 X
              </span>
            </p>
        )) : <h3>Your Cart is Empty</h3>
      }
    </>
  )
};

export default ShoppingCart;
