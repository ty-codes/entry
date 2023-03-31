import styled from "styled-components";
import { JobsIcon, ProjectsIcon, EventsIcon, sliderShapeYellow, students, UserIcon, sliderShapeLong } from "../assets";
import { Footer } from ".";

export default function ConnectCategory({ theme }) {
    return (
        <Wrapper>
            <TextBoxWrapper image={sliderShapeLong} theme={theme} >
                <TextBox>
                    <MainText theme={theme}>Connecting <span>Students</span> to</MainText>
                    <Rows>
                    <Row>
                            <img style={{backgroundColor: "white", width: "30px", height: "30px", padding: "10px"}} src={UserIcon} alt="Profile" />
                            <div>
                                <strong>Profile</strong>
                                <p>
                                    Complete your profile to increase your visibility to recruiters
                                </p>
                            </div>

                        </Row>
                        <Row>
                            <img src={ProjectsIcon} alt="Projects" />
                            <div>
                                <strong>Projects</strong>
                                <p>
                                    Showcase your projects
                                </p>
                            </div>

                        </Row>
                        <Row>
                            <img src={JobsIcon} alt="Jobs" />
                            <div>
                                <strong>Jobs and Internships</strong>
                                <p>
                                You are now ready to apply to jobs after working on a few projects. 
                                We will connect you with companies that best match your skills and interests.
                                </p>
                            </div>

                        </Row>
                        <Row>
                            <img src={EventsIcon} alt="events" />
                            <div>
                                <strong>Events and Insights</strong>
                                <p>
                                Learn from brands and industry expertise through 
                                a perfectly curated selection of events and workshops.
                                </p>
                            </div>

                        </Row>
                    </Rows>
                </TextBox>
                <Hero src={students} alt="hero" />
            </TextBoxWrapper>
            <Footer theme={theme} />
        </Wrapper>
    )
};

const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;

    @media (max-width: 768px) {
        scroll-snap-align: none;
        height: auto;
    }
`;

const TextBoxWrapper = styled.div`
    background: ${(props) => props.theme.background};
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
        height: auto;
        padding: 3em 0;
        padding: 1.5em 0.5em;
    }

    // @media (max-width: 800px) {
        
    // }
`

const TextBox = styled.div`
    width: 100%;
    margin: 1em;

    @media (max-width: 768px) {
        padding-top: 2em;
        height: 50%;
    }
`;

const MainText = styled.h1`
    color: #1e1e1e;
    font-weight: 900;
    font-size: 42px;
    margin: 0 0 0.8em 0;


    span {
        color: #00315c;
       
    }

    @media (max-width: 550px) {
        font-size: 30px;
    }

    @media (max-width: 400px) {
        font-size: 23px;
    }
`;

const Hero = styled.img`
    height: 80%;
    width: 55%;

    @media (max-width: 768px) {
        width: 70%;
        height: 50%;
    }
    @media (max-width: 768px) {
        width: 85%;
        height: 60%;
    }
`;

const Rows = styled.ul`
    display: flex;
    flex-direction: column;
`;

const Row = styled.li`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 1.5em;

    strong {
        margin: 0.5em;     
    }
    p {
        font-size: 0.8em;
        margin: 0.5em;
    }

    img {
        width: 50px;
        height: 50px;
        border-radius: 10px;
    }
`