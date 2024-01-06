import { useState } from 'react';
import { Badge, Form, InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaShoppingBag } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import img from '../../assets/images/sushi.jpg';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header className="bg-light p-2 justify-content-start">
          <FaShoppingBag />
          <Offcanvas.Title className=" ml-5">1 Item</Offcanvas.Title>
          <div className="flex-grow-1" />
          <Button size="sm" variant="outline-danger">
            Close
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <div className="border border-danger d-flex mb-1 position-relative">
              <div style={{ width: '110px' }} className=" p-1">
                <img
                  className="w-100 h-100 object-fit-cover rounded"
                  src={img}
                  alt=""
                />
              </div>
              <div
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
                <p className="font-weight-bold m-0">Chicken Masala</p>
                <p className="mb-2">$123/each</p>

                <InputGroup className="mb-3">
                  <Button size="sm" variant="primary">
                    -
                  </Button>
                  <Form.Control
                    style={{ width: '0', textAlign: 'center' }}
                    placeholder="10"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <Button size="sm" variant="primary">
                    +
                  </Button>
                </InputGroup>
                <div className="text-end"> $120</div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;
