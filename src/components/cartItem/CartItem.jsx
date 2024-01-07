import { Badge, Button, Form, InputGroup } from 'react-bootstrap';
import { MdDelete } from 'react-icons/md';

const CartItem = ({
  item,
  handleIncrementItem,
  handleDecrementItem,
  handleRemoveFromCart,
}) => {
  return (
    <div className="border border-danger d-flex mb-2 position-relative">
      <div style={{ width: '110px' }} className=" p-1">
        <img
          className="w-100 h-100 object-fit-cover rounded"
          src={item.img}
          alt=""
        />
      </div>
      <div
        onClick={() => handleRemoveFromCart(item.id)}
        style={{
          fontSize: '25px',
          cursor: 'pointer',
          position: 'absolute',
          top: -15,
          right: -10,
        }}
      >
        <Badge bg="danger">
          <MdDelete />
        </Badge>
      </div>
      <div className="p-2">
        <p className="font-weight-bold m-0">{item.title}</p>
        <p className="mb-2">${item.price }/each</p>

        <InputGroup className="mb-3">
          <Button
            size="sm"
            variant="primary"
            onClick={() => handleDecrementItem(item.id)}
          >
            -
          </Button>
          <Form.Control
            style={{ width: '0', textAlign: 'center' }}
            value={item.quantity}
            readOnly={true}
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <Button
            size="sm"
            variant="primary"
            onClick={() => handleIncrementItem(item.id)}
          >
            +
          </Button>
        </InputGroup>
        <div className="text-end"> ${item.quantity * item.price }</div>
      </div>
    </div>
  );
};

export default CartItem;
