import { Badge, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaShoppingBag } from 'react-icons/fa';
import Logo from '../../assets/images/logo.png';
import { useToggle } from '../../hooks/useToggle';

const navLink = [
  { id: 1, name: 'Menu', link: '#/menu' },
  { id: 2, name: 'Rewards', link: '#/rewards' },
  { id: 3, name: 'Locations', link: '#/locations' },
  { id: 4, name: 'Gift Card', link: '#/gift-cards' },
  { id: 5, name: 'Login', link: '#/login' },
];

function Header() {
  const { dispatch } = useToggle();

  const handleSidebarOpen = () => {
    dispatch({ type: 'open' });
  };

  return (
    <>
      <Navbar
        style={{ background: '#F9F5F1' }}
        data-bs-theme="light"
        className="text-uppercase"
      >
        <Container>
          <Navbar.Brand href="#home">
            <Image width={100} height={60} src={Logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="me-auto">
            {navLink?.map((nav) => (
              <Nav.Link key={nav.id} href={nav.link}>
                {nav.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav>
            <Nav.Link onClick={handleSidebarOpen}>
              <div className="position-relative">
                <FaShoppingBag
                  className="text-dark"
                  style={{ fontSize: '40px' }}
                />
                <Badge
                  bg="primary"
                  className="position-absolute bottom-50 start-50"
                >
                  9
                </Badge>
              </div>
            </Nav.Link>
            <Nav.Link>
              <Button size="sm">Order Now</Button>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
