import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingBag } from 'react-icons/fa';
import { useShoppingCart } from '../../hooks/useShoppingCart ';
import { useToggle } from '../../hooks/useToggle';
import CartItem from '../cartItem/CartItem';
import { getTotalPrice } from '../../utils/calculateTotalPrice';

function Sidebar() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart } =
    useShoppingCart();
  const { state, dispatch } = useToggle();

  const handleClose = () => {
    dispatch({ type: 'close' });
  };



  const handleIncrementItem = (itemId) => {
    incrementQuantity(itemId);
  };
  const handleDecrementItem = (itemId) => {
    const cartItem = cart.find((item) => item.id === itemId);

    if (cartItem.quantity === 1) {
      removeFromCart(itemId);
      return;
    }

    decrementQuantity(itemId);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };


  const totalPrice = getTotalPrice(cart);

  console.log(cart);

  return (
    <>
      <Offcanvas show={state.isOpen} onHide={handleClose} placement="end">
        <Offcanvas.Header className="bg-light p-2 justify-content-start">
          <FaShoppingBag />
          <Offcanvas.Title className=" ml-5">1 Item</Offcanvas.Title>
          <div className="flex-grow-1" />
          <Button size="sm" variant="outline-danger" onClick={handleClose}>
            Close
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            {cart?.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                totalPrice={totalPrice}
                handleIncrementItem={handleIncrementItem}
                handleDecrementItem={handleDecrementItem}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))}
          </div>
        </Offcanvas.Body>
        <Offcanvas.Header className='bg-light  py-2 text-danger'>
          <p className='m-0'>Place Order </p>
          <p className='m-0'>${totalPrice}</p>
        </Offcanvas.Header>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
