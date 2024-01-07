import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ProductCard({ product, handleAddToCart }) {
  const { img, title, price, text } = product;
  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title className="mb-0">{title}</Card.Title>
            <p>${price}/each</p>
            <Card.Text>{text}</Card.Text>
            <div className="d-grid gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={() => handleAddToCart(product)}
              >
                Add to Order
              </Button>
              <Button variant="outline-primary" size="sm">
                Customize
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default ProductCard;
