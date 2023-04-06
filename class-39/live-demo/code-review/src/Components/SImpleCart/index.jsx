import { When } from 'react-if';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../../store/actions';
import './styles.scss';

const SimpleCart = () => {
  const { cart } = useSelector(state => state);
  const dispatch = useDispatch();
  return (
    <When condition={cart.length > 0}>
      <div className="simple-cart">
        <ul>
          {cart.map((item, idx) =>
            <li key={`item${idx}`} className="item">
              {item.name}
              <span
                onClick={() => dispatch(removeProduct(item))}
                className="remove"
              >
                 X
              </span>
            </li>
          )}
        </ul>
        <div className="footer"></div>
      </div>
    </When>
  )
};

export default SimpleCart;
