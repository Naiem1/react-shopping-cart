import { Row } from 'react-bootstrap';
import img1 from '../../assets/images/burger.jpg';
import img4 from '../../assets/images/food4.jpg';
import img5 from '../../assets/images/food5.jpg';
import img6 from '../../assets/images/food6.jpg';
import img2 from '../../assets/images/pizza.jpg';
import img3 from '../../assets/images/sushi.jpg';
import { useShoppingCart } from '../../hooks/useShoppingCart ';
import ProductCard from '../card/PoductCard';
import { useEffect, useState } from 'react';
import { useToggle } from '../../hooks/useToggle';

const cardDetails = [
  {
    id: 1,
    img: img1,
    title: 'Vegetarian Hot Garlic',
    price: 16,
    text: 'With garlic, capers, chili, fennel, parsley',
  },
  {
    id: 2,
    img: img2,
    title: 'Sweet Chili Beef Burger',
    price: 14,
    text: 'With garlic, capers, chili, fennel, parsley',
  },
  {
    id: 3,
    img: img3,
    title: 'Salmon Sashimi',
    price: 27,
    text: 'With cream cheese, salmon and black sesame',
  },
  {
    id: 4,
    img: img4,
    title: 'Rice and curry',
    price: 5,
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    id: 5,
    img: img5,
    title: 'Prawn Fried Rice',
    price: 15,
    text: 'cloves garlic, crushed carrots, peeled and finely chopped',
  },
  {
    id: 6,
    img: img6,
    title: 'Ham Sandwiches',
    price: 10,
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

const ProductSection = () => {
  const { state: {selectedProducts }, addToCart } = useShoppingCart();
  const { dispatch} = useToggle()
  const handleAddToCart = (item) => {
    addToCart(item);
    
    dispatch({type: 'open'})
  };
  
  return (
    <div className="container  my-5">
      <h4 className=" text-uppercase my-3">Menu</h4>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardDetails.map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
            selectedProducts={selectedProducts}
          />
        ))}
      </Row>
    </div>
  );
};

export default ProductSection;
