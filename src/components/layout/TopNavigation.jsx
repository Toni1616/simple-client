import {Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const TopNavigation = () => {
    return(
        <>
            <Navbar sticky={"top"} bg="dark" data-bs-theme="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">Home</Navbar.Brand>
                    <Nav className="justify-content-end">
                        {/*<Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>*/}
                        <Nav.Link as={NavLink} to={"/create"} className="badge text-white bg-secondary text-wrap">Create</Nav.Link>
                        {/*<Nav.Link as={NavLink} to={"/home"}>Home</Nav.Link>*/}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default TopNavigation