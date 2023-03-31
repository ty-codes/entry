import styled from "styled-components";
import { NavBar, GeneralCategory, ProjectCategory, ConnectCategory } from "../../components";
import { icon } from "../../assets";
import "./Landing.css";

export default function Landing() {
    const theme = {
        entry: {
            primaryColor: "linear-gradient(139.52deg,#6251C3 -73.08%,#2b0548 150.16%)",
            background: "#f6e5f7",
            secondaryColor: "#A800AB"
        },
        recruiter: {
            primaryColor: "linear-gradient(146.02deg,#00C27C 7.57%,#3288D3 146.47%)",
            background: "#e5f9f2",
            secondaryColor: "#00C27C"
        },
        page3: {
            primaryColor: "linear-gradient(95.88deg,#FFBE01 29.98%,#FFBB38 110.17%)",
            background: "#fff9e6",
            secondaryColor: "#FFBE01"
        },
        page4: {
            primaryColor: "linear-gradient(157.89deg,#F26835 21.79%,#FFBE01 180.26%)",
            background: "#fef1eb",
            secondaryColor: "#F26835"
        },
        page5: {
            primaryColor: "linear-gradient(117.24deg,#3288D3 -7.43%,#00315C 125.69%)",
            background: "#e5eaee",
            secondaryColor: "#00315C"
        }
    }
    return (
        <>
            <ScrollWrapper>
                <GeneralCategory theme={theme.entry} />
                <ProjectCategory theme={theme.page3} />
                <ConnectCategory theme={theme.page5} />

                {/* <ValueStatement theme={theme.entry} /> */}

                <Footer theme={theme.entry}>
                    <Left>
                        <span>©  {new Date().getFullYear()} Skilful. All rights reserved.</span>
                        <span><img style={{ width: "13px", height: "12px" }} src={icon} alt="logo" /></span>
                    </Left>
                    <Right>
                        <span>Contact</span>
                        <span>Privacy Policy</span>
                        <span>Terms of use</span>

                    </Right>
                </Footer>
            </ScrollWrapper>
        </>
    )
}

const ScrollWrapper = styled.div`
    // position: fixed;
    // top: 0;
    // left: 0;
    // width: 100%; 
    // height: 100vw;
    // transform-origin: top left;
    // transform: rotate(-90deg) translateX(-100vh);
    // overflow-x: hidden;
    // overflow-y: scroll;

    // transform-origin: top left;
    // transform: rotate(90deg) translateY(-100vh);

    width: 100vw;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;

    @media (max-width: 768px) {
        scroll-snap-type: none;
    overflow: auto;
    overflow-y: scroll;
    }

`;

const Subtitle = styled.p`
    margin-bottom: 0;
    color: #000;
    max-width: 493px;
    margin: 2em 0;

    @media (max-width: 550px) {
        font-size: 15px;
        width: 80%
    }
`;

const Wrapper = styled.div`
    background: ${(props) => props.theme.background};
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100% - 50px);
    padding-top: 50px;
    height: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const TextBox = styled.div`
    width: 45%;
    margin-left: 2em;

    @media (max-width: 768px) {
        width: 100%;
        padding-top: 2em;
        height: 50%;
    }
`;

const Hero = styled.img`
    height: 80%;
    width: 55%;

    @media (max-width: 768px) {
        width: 70%;
        height: 50%;
    }
`;


const Footer = styled.footer`
    height: 40px;
    background: ${(props) => props.theme.primaryColor};
    color: #ddd;
    font-size: 10px;
    font-weight: lighter;
    display: none;
    

    @media (max-width: 768px) {
        display: flex;
        padding: 12px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
     }
`;

const Left = styled.div`
   span {
    margin-right: 1em;
   }

   @media (max-width: 768px) {
    margin: 0.5em 0;
    }
`

const Right = styled.div`
    span {
        margin-right: 1em;
   }
`