import { NavDropdown, Navbar, Nav } from "react-bootstrap";



function Dropdown({ name, ...props }) {

return (
    <>
    <Navbar.Collapse id="navbar-dark-example">
        <Nav>
            <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
            >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </>
);
}


export default Dropdown;