import styled from "styled-components";
import { hero, sliderShapeLong, testb, testc, teste, testf } from "../assets";
import {Footer} from ".";

export default function GeneralCategory({ theme }) {
    return (
        <Wrapper>
            <TextBoxWrapper image={sliderShapeLong} theme={theme} >
                <TextBox>
                    <MainText>Connect with <span>Recruiters</span></MainText>
                    <MainText>for <span>Projects</span> and <span>Jobs</span></MainText>
                    <MainText>and Explore New Skills</MainText>
                    <Subtitle>
                        We are a community that connects talented entry-level developers
                        and designers to companies for skill-building opportunities.
                    </Subtitle>
                    <Button theme={theme}>
                        Learn More
                    </Button>
                </TextBox>
                <Hero src={hero} alt="hero" />

            </TextBoxWrapper>
            <Footer theme={theme} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;

    @media (max-width: 768px) {
        scroll-snap-align: none;
        height: 100%;
    }
`;

const TextBoxWrapper = styled.div`
    // background: ${(props) => props.theme.background};
    background: white;
    background-image: url(${props => props.image});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: calc(100% - 40px);
    // padding-top: 50px;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        height: 100%;
    }
`

const Subtitle = styled.p`
    margin-bottom: 0;
    color: #000;
    max-width: 493px;
    margin: 2em 0;

    @media (max-width: 550px) {
        font-size: 15px;
        width: 80%;
    }
`;


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
    // border-radius: 50%;
    // padding-right: 20px;
    // object-fit: cover;

    @media (max-width: 768px) {
        width: 70%;
        height: 50%;
    }
    @media (max-width: 768px) {
        width: 100%;
        height: 60%;
    }
`;

const MainText = styled.h1`
    color: #6669c5;
    font-weight: 900;
    font-size: 42px;
    // color: #1e1e1e;

    & span {
        display:inline-block;
        white-space: nowrap;
    }

    @media (max-width: 550px) {
        font-size: 30px;
    }

    @media (max-width: 400px) {
        font-size: 23px;
    }
`

const Button = styled.button`
    height: 40px;
    width: 90px;
    border: none;
    background: ${(props) => props.theme.primaryColor};
    color: white;
    border-radius: 6px;
    font-weight: 700;
    padding: 16px 25px;
    min-width: 190px;
    height: 53px;
    font-size: 16px;
    line-height: 19px;
    box-shadow: none!important;
    transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
`;