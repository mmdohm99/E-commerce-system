import * as React from 'react';
import NestedBar from './Nestedbar';
import { useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaCartArrowDown } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { CgLogIn } from 'react-icons/cg';
import { CgLogOut } from 'react-icons/cg';
import { BsDoorOpenFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import CallIcon from '@mui/icons-material/Call';

export default function PrimarySearchAppBar() {
  const token = localStorage.getItem('token');
  let getRole;
  if (token) {
    getRole = JSON.parse(localStorage.getItem('response'));
  }
  const handleProfileLogin = () => {
    if (localStorage.getItem('token')) {
      navigate(`/profile`, { replace: false });
    } else {
      alert('You must login first');
      navigate(`/login `, { replace: false });
    }
  };

  console.log(getRole);
  const Role = getRole?.data?.data?.user?.role;
  const checkToken = localStorage.getItem('token');
  // console.log(Role);
  const navigate = useNavigate();
  console.log(checkToken ? 'succes' : 'false');
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate(`/ `, { replace: false })}>
            Zmix
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                style={{ fontSize: '20px' }}
                onClick={() => navigate(`/filter `, { replace: false })}
              >
                Products
              </Nav.Link>
            </Nav>

            <Nav>
              {(Role === 'admin' || Role === 'seller') && (
                <Nav.Link
                  onClick={() => navigate(`/dashboard `, { replace: false })}
                >
                  <FiSettings style={{ fontSize: '27px', color: '#fff' }} />
                </Nav.Link>
              )}
              <Nav.Link
                onClick={() => navigate(`/contactus `, { replace: false })}
              >
                <CallIcon style={{ fontSize: '27px', color: '#fff' }} />
              </Nav.Link>
              <Nav.Link onClick={() => navigate(`/cart `, { replace: false })}>
                <FaCartArrowDown style={{ fontSize: '27px', color: '#fff' }} />
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  handleProfileLogin();
                }}
              >
                <ImProfile style={{ fontSize: '27px', color: '#fff' }} />
              </Nav.Link>
              {checkToken ? (
                <Nav.Link
                  onClick={() => {
                    localStorage.setItem('response', '');
                    localStorage.setItem('token', '');
                    navigate(`/login `, { replace: true });
                  }}
                >
                  <CgLogIn style={{ fontSize: '27px' }} />
                </Nav.Link>
              ) : (
                <Nav.Link
                  onClick={() => navigate(`/login `, { replace: true })}
                >
                  <CgLogOut style={{ fontSize: '27px', color: '#fff' }} />
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <NestedBar />
    </>
  );
}

// <Nav.Link onClick={() => navigate(`/signup `, { replace: false })}><BsDoorOpenFill style={{fontSize:'27px'}} /></Nav.Link>

// <NavDropdown style={{zIndex:'10000'}} title={<HiOutlineUserCircle style={{fontSize:'27px'}}/>} id="collasible-nav-dropdown">
// <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
// <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
// <NavDropdown.Divider />
// <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
// </NavDropdown>
