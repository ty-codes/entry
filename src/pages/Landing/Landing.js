import styled from "styled-components";
import {Navbar} from "../../components";
import {hero, sliderShapeLong} from "../../assets";
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
            primaryColor: "#fef1eb",
            background: "linear-gradient(157.89deg,#F26835 21.79%,#FFBE01 180.26%)",
            secondaryColor: "#F26835"
        },
        page5: {
            primaryColor: "#e5eaee",
            background: "linear-gradient(117.24deg,#3288D3 -7.43%,#00315C 125.69%)",
            secondaryColor: "#00315C"
        }
    }
    return (
        <>
            <ScrollWrapper>
                <EntryCategory theme={theme.entry} />
                <RecruiterCategory>
                    <h1>The first section</h1>

                </RecruiterCategory>

            </ScrollWrapper>
        </>
    )
}

const EntryCategory = ({theme}) => {

    return (
        <EntryWrapper >
            <Navbar  theme={theme} />
            <Wrapper image={sliderShapeLong} theme={theme} >
                <TextBox>
                    <MainText>Connect with <span>Recruiters</span></MainText>
                    <MainText>for <span>Projects</span> and <span>Jobs</span></MainText>
                    <MainText>and Explore New Skills</MainText>
                    <Subtitle>
                        We are a community that connects talented entry-level developers
                         and students to companies for skill-building opportunities.
                    </Subtitle>
                    <Button theme={theme}>
                        Learn More
                    </Button>
                </TextBox>

                <Hero src={hero} alt="hero" />
            </Wrapper>
        </EntryWrapper>
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

`;

const EntryWrapper = styled.div`
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
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

const RecruiterCategory = styled.div`
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
    background-color: #bbb;

//   :nth-of-type(odd) {
//     background: #111;
//     color: #fff;
//   }
  
//   :nth-of-type(even) {
//     background: rgb(63, 27, 27);
//     color: #fff;
//   }
`;

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