import styled from "styled-components";
import { firstOpportunity, postProject, sliderShapeYellow, jobsAndInternships } from "../assets";

export default function ProjectCategory({ theme }) {
    return (
        <Wrapper>
            <TextBoxWrapper image={sliderShapeYellow} theme={theme} >
                <TextBox>
                    <MainText theme={theme}>Post a <span>Project</span></MainText>
                    <Subtitle>
                        Work with talents from universities and communities
                    </Subtitle>
                    <BoxWrapper>
                        <Box>
                            <img src={postProject} alt="post-a-project" />
                            <strong>Projects</strong>
                            <p>
                                For startups with defined tasks looking for
                                short-term project help and looking to connect
                                with Business and STEAM students.
                              </p>
                        </Box>
                        <Box>
                        <img src={jobsAndInternships} alt="post-a-project" />
                            <strong>Jobs and Internships</strong>
                            <p>
                                Expand your pipelines a get connected with a
                                curated qualified pool of students and their
                                skill insights that fits the role.
                              </p>
                        </Box>
                        <Box>
                        <img src={firstOpportunity} alt="post-a-project" />

                            <strong>1st Opportunity</strong>
                            <p>
                                We are intentional about giving students their
                                first out-of-classroom experience. Join us in
                                this critical mission! Learn more here.
                              </p>
                        </Box>
                    </BoxWrapper>
                </TextBox>
            </TextBoxWrapper>
        </Wrapper>
    )
};

const BoxWrapper = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    list-style-type: none;
    width: 100%;

    @media (max-width: 800px) {
       justify-content: center
    }
    
`;

const Box = styled.li`
    width: 25%;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    height: 300px;
    // margin: 1em;



    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        margin-bottom: 1em;
        border-radius: 10px;
    }
    strong {
        margin: 0.5em;     
    }
    p{
        font-size: 0.8em;
        margin: 0.5em;
    }

    @media (max-width: 800px) {
        width: 85%;
        height: fit-content;
        margin-bottom: 0.5em;
    }
`;


const Wrapper = styled.div`
    height: 100%;
    width: 100vw;
    justify-content: center;
    align-items: center;
    scroll-snap-align: start;
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
    // height: calc(100% - 50px);
    // padding-top: 50px;
    height: 100%;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }

    @media (max-width: 800px) {
        padding: 0 0.5em;
    }
`

const Subtitle = styled.p`
    margin-bottom: 0;
    color: #000;
    max-width: 493px;
    margin: 0.5em 0 2em 0;

    @media (max-width: 550px) {
        font-size: 15px;
        width: 80%
    }
`;


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
    // color: #1e1e1e;

    span {
        color: #FFBE01;
       
    }

    @media (max-width: 550px) {
        font-size: 30px;
    }

    @media (max-width: 400px) {
        font-size: 23px;
    }
`;