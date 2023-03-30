import styled from "styled-components";
import { Link } from "react-router-dom";
// import {Container, Offcanvas, NavDropdown} from "react-bootstrap";
import { logo } from "../assets";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';


export default function NavBar({ theme }) {
    // return (
    //     <>
    //         {/* <NavWrapper>
    //             <Logo src={logo} alt="logo" />
    //             <NavItems>
    //                 <NavItem><Link to="/">Home</Link></NavItem>
    //                 <NavOutlinedButton theme={theme} >
    //                     Log in
    //                 </NavOutlinedButton>
    //                 <NavFilledButton theme={theme}>
    //                     Sign up
    //                 </NavFilledButton>
    //             </NavItems>

    //         </NavWrapper> */}
    //         <>
          
    //       {['md'].map((expand) => (
    //     <NavWrapper key={expand} bg="#111111" expand={expand} className="mb-0 nav__bar">
    //       <Container fluid>
    //         <Navbar.Brand href="/">               
    //             <Logo src={logo} alt="logo" />
    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
    //         <Navbar.Offcanvas
    //           id={`offcanvasNavbar-expand-${expand}`}
    //           aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
    //           placement="end"
    //         >
    //           <Offcanvas.Header closeButton >
    //             <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
    //             <Logo src={logo} alt="logo" />

    //             </Offcanvas.Title>
    //           </Offcanvas.Header>
    //           <Offcanvas.Body>
    //             <Nav className="justify-content-end flex-grow-1 pe-3">
    //               <Nav.Link className='link' href="/">Home</Nav.Link>                  
    //               <NavOutlinedButton theme={theme} >
    //                     Log in
    //                 </NavOutlinedButton>
    //                 <NavFilledButton theme={theme}>
    //                     Sign up
    //                 </NavFilledButton>
    //              </Nav>
                
    //           </Offcanvas.Body>
    //         </Navbar.Offcanvas>
    //       </Container>
    //     </NavWrapper>
    //   ))}
    //     </>
    //     </>
    // )
    return (
      <div>NavBar</div>
    )
}

const NavWrapper = styled(NavBar)`
    position: fixed;
    background-color: transparent;
    height: 50px;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    width: 99%;
    align-items: end;
`;

const NavItems = styled.ul`
    display: flex;
    list-style-type: none;
`;

const Logo = styled.img`
    height: 40px;
`

const NavItem = styled.li`
    color: #464646;
    font-size: 1.2em;
    font-weight: 600;
    margin: 0 0.5em;
    align-self: center;
`;

const NavOutlinedButton = styled.button`
    height: 40px;
    width: 90px;
    border: none;
    margin: 0 0.5em;
    font-size: 0.8em;
    font-weight: 500;
    padding: 10px 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    min-width: 110px;
    white-space: nowrap;
    border-radius: 6px;
    background-color: white;
    color: ${(props) => props.theme.secondaryColor}
}

`;

const NavFilledButton = styled.button`
    height: 40px;
    width: 90px;
    border: none;
    margin: 0 0.5em;
    background: ${(props) => props.theme.primaryColor};
    font-size: 0.8em;
    font-weight: 500;
    color: white;
    padding: 10px 30px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    min-width: 110px;
    white-space: nowrap;
    border-radius: 6px;
`;