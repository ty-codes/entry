import styled from "styled-components";
import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Navbar({ theme }) {
    return (
        <Nav>
            <Logo src={logo} alt="logo" />
            <NavItems>
                <NavItem><Link to="/">Home</Link></NavItem>
                <NavOutlinedButton theme={theme} >
                    Log in
                </NavOutlinedButton>
                <NavFilledButton theme={theme}>
                    Sign up
                </NavFilledButton>
                <p>burger</p>
            </NavItems>

        </Nav>
    )
}

const Nav = styled.nav`
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