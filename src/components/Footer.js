import styled from "styled-components"
import { icon } from "../assets";

export default function Footer({ theme }) {
    return (
        <Wrapper theme={theme}>
            {/* <div> */}
                <Left>
                    <span>©  {new Date().getFullYear()} Skilful. All rights reserved.</span>
                    <span><img style={{width: "13px", height: "12px"}} src={icon} alt="logo" /></span>
                </Left>
                <Right>
                    <span>Contact</span>
                    <span>Privacy Policy</span>
                    <span>Terms of use</span>

                </Right>
            {/* </div> */}

        </Wrapper>
    )
}

const Wrapper = styled.footer`
    height: 40px;
    background: ${(props) => props.theme.primaryColor};
    color: #fafafa;
    font-size: 11px;
    font-weight: lighter;
    display: flex;
    justify-content: space-around;
    padding: 12px;

    @media (max-width: 768px) {
        display: none;
    }
    
`;

const Left = styled.div`
   span {
    margin-right: 1em;
   }
`

const Right = styled.div`
    span {
        margin-right: 1em;
   }
`