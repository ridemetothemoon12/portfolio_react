import styled, { keyframes } from 'styled-components'
import axios from 'axios';
import React,{useState, useEffect} from 'react'
import "aos/dist/aos.css";
import Aos from 'aos';
import ReactTyped from 'react-typed';
import 'react-typed/dist/animatedCursor.css';
import { useNavigate } from 'react-router-dom'

const InitialAnimation = keyframes`
0% {
    transform: translateY(0%);
}
100% {
    transform: translateY(-100%);
}
`
const Initial = styled.div`
    width: 100%;
    height: 100%;
    background-color: #29452F;
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    list-style: -10px;
    font-size: 350px;
    animation: ${InitialAnimation} 1s forwards;
    animation-delay: .5s;
    overflow: hidden;
`
const Content = styled.div`
    img {
        filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.5));
    }
`
const ContentItemOne = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    max-width: 1200px;
    margin: 300px auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
`
const ContentItemOneText = styled.div`
    margin-left: 30px;
    flex-basis: 50%;
    font-size: 48px;
    a {
        font-size: 32px;
        background-color: #29452F;
        padding: 0 5px;
        &:hover {
            color: white;
        }
    }
    span {
        width: fit-content;
        padding: 0 5px;
        background-color: #29452F;
        color: white;
    }
    p {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    }
`
const ContentItemTwo = styled.div`
    display: flex;
    justify-content: center;
`
const ContentItemTwoProblems = styled.div`
    margin-right: 15px;
`
const ContentItemTwoSolutions = styled.div`
    display: flex;
    margin-left: 15px;
    align-items: flex-end;
`
const ContentItemTwoTextWrap = styled.div`
    width: 300px;
    h3 {
        width: fit-content;
        padding: 0 5px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
        font-size: 32px;
        background-color: #29452F;
        color: white;
    }
`
const ContentItemTwoImagesWrap = styled.div`
    position: relative;
    width: 500px;
    height: 800px;
    background-color: white;
    filter: drop-shadow(0px 0px 4px rgba(0,0,0,0.5));
`
const ContentItemTwoImageBefore = styled.div`
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("./Images/culturebefore.png");
    background-position: center;
    background-size: cover;
    z-index: 1;
`
const ContentItemTwoImageAfter = styled.div`
    width: 100%;
    height: 100%;
    position: absolute; 
    top: 0;
    left: 0;
    background-image: url("./Images/cultureafter.png");
    background-position: top;
    background-size: cover;
`
const Input = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    appearance: none;
    background-color: transparent;
    width: 100%;
    height: 100%;
    z-index: 1;
    &::-webkit-slider-thumb {
        position: relative;
        appearance: none;
        width: 2px;
        height: 800px;
        background: #29452F;
        cursor: pointer;
    }
`
const ContentItemTwoImagesButton = styled.div`
    position: absolute;
    top: 50%;
    left: calc(50% - 10px);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #29452F;
    pointer-events: none;
    z-index: 1;
    &::before {
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        top: 25%;
        transform: translateX(-50%);
        left: 8px;
        background-color: white;
    }
    &::after {
        position: absolute;
        content: "";
        width: 2px;
        height: 50%;
        top: 25%;
        transform: translateX(-50%);
        left: 12px;
        background-color: white;
    }
`
const ContentItemThree = styled.div`
    max-width: 1200px;
    margin: 300px auto;
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    justify-content: space-between;
    h3 {
        width: fit-content;
        background-color: #29452F;
        color: white;
        padding: 0 5px;
    }
`
const ContentItemThreeText = styled.div`
    max-width: 400px;
    h3 {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
        font-size: 32px;
    }
    p {
        margin: 0;
        margin-right: 70px;
        font-size: 18px;
        &:nth-child(1) {
            margin-bottom: 10px;
        }
    }
`
const ContentItemFour = styled.div`
    position: relative;
    &::after {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        left: 17%;
        top: -20%;
        position: absolute;
        content: "Color & Fonts";
        font-size: 32px;
        background-color: #29452F;
        padding: 0 5px;
        color: white;
    }
`
const ContentItemFourWrap = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
`
const ContentItemFourColorsWrap = styled.div` 
    flex-wrap: wrap;
    flex-basis: 40%;
    display: flex;
    justify-content: space-around;
    p {
        margin: 10px 0;
    }
`
const ContentItemFourColorsItem = styled.div`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    display: flex;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: #143b63;
    border-radius: 50%;
    text-align: center;
    align-items: center;
    color: white;
    filter: drop-shadow(0px 0px 3px black);
    &:nth-child(3) {
        color: rgb(49, 49, 49);
        background-color: #e8f0f9;
    }
    &:nth-child(4) {
        color: rgb(49, 49, 49);
        background: rgb(255,255,255);
        background: linear-gradient(126deg, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 100%);
    }
`
const ContentItemFourFontsWrap = styled.div`
    flex-basis: 40%;
    span {
        margin-top: 5px;
        display: flex;
    }
`
const ContentItemFive = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 300px;
    margin-bottom: 200px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    img {
        max-width: 800px;
    }
`
const ContentItemFiveText = styled.div`
    margin-bottom: 30px;
    h3 {
        width: fit-content;
        font-size: 32px;
        padding: 0 5px;
        background-color: #29452F;
        color: white;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: normal;
    }
`
const ContentItemFiveImagesDescWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`
const ContentItemFiveDescWrap = styled.div`
    width: 300px;
    height: 2000px;
    margin-top: 10px;
    margin-left: 40px;
    color: black;
    h3 {
        font-weight: normal;
        font-size: 32px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        text-decoration: underline;
        position: relative;
        &::before {
            position: absolute;
            content: "";
            width: 20px;
            height: 20px;
            background-color: #29452F;
            border-radius: 50%;
            top: 0;
            left: -10px;
            z-index: -1;
        }
        &::after {
            position: absolute;
            content: "";
            width: 60px;
            height: 2px;
            background-color: #29452F;
            top: 10px;
            left: -60px;
        }
    }
`
const ContentItemFiveDescHeader = styled.div``
const ContentItemFiveDescContent1 = styled.div`
    padding-top: 360px;
`
const ContentItemFiveDescContent2 = styled.div`
    padding-top: 90px;
`
const ContentItemFiveDescContent3 = styled.div`
    padding-top: 230px;
`
const ContentItemFiveDescContent4 = styled.div`
    padding-top: 230px;
`
const ContentItemFiveDescFooter = styled.div`
    padding-top: 240px;
`
const ContentNavigation = styled.div`
    top: 40%;
    left: 95%;
    position: fixed;
`
const ContentNavigationLi = styled.li`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 30px 0;
    transition: .3s;
    cursor: pointer;
    position: relative;
    background-color: ${(props) => props.color || "skyblue"};
    &:nth-child(2) {
        &:hover::after {
            content: "Ministry of culture";
        }
    }
    &:nth-child(3) {
        &:hover::after {
            content: "Nature dream";
        }
    }
    &:nth-child(4) {
        &:hover::after {
            content: "Hilton hotel";
        }
    }
    &:hover {
        transform: scale(1.8);
        &::after {
            position: absolute;
            top: -5px;
            left: -120px;
            width: 150px;
            height: 30px;
            font-size: 14px;
            background-color: black;
            color: white;
            text-align: center;
            line-height: 30px;
            filter: drop-shadow(0px 0px 0px black);
            transform: scale(0.5);
        }
    }
`
function handleChange(e) {
    console.log("changed")
    var pos = e.target.value;
    var tarWindow = document.querySelector(".TargetSelectionWindowChanger")
    var tarbutton = document.querySelector(".WindowChangerButton")
    tarWindow.style.width = `${pos}%`
    tarbutton.style.left = `calc(${pos}% - 10px)`
}

function Grandhyatt() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get(
            'Img.json'
        );
        setUsers(response.data.portfolios);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        Aos.init();
        })
        
    const navigate = useNavigate();
    const clickEvent = function(link) {
        navigate(link)
    }
  return (
    <>
        <Initial>Ministry of culture</Initial>
        <Content>
            <ContentItemOne>
                <img src="./Images/Culture_main.png" alt="1" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1500"/>
                <ContentItemOneText data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1700">
                    <p style={{fontSize: "24px"}}>Coding 100%.</p>
                    <span>Ministry of culture</span>
                    <p>Main page Redesign.</p>
                    <p><a target="_blank" href="https://www.mcst.go.kr/kor/main.jsp">Original</a> <a target="_blank" href="https://ridemetothemoon12.github.io/culture/">Redesign</a></p>
                </ContentItemOneText>
            </ContentItemOne>

            <ContentItemTwo>
                <ContentItemTwoProblems data-aos="fade-right" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoTextWrap>
                    <h3>.Problems</h3>
                    <p>
                    ????????? ???????????? ???????????? ?????????, ?????? ??????????????? ???????????? ????????????, ???????????? ????????? ????????? ?????? ????????? ???????????? ????????????.
                    </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoProblems>
                    <ContentItemTwoImagesWrap data-aos="fade" data-aos-offset="10" data-aos-duration="1500">
                    <ContentItemTwoImageBefore className='TargetSelectionWindowChanger'></ContentItemTwoImageBefore>
                    <ContentItemTwoImageAfter></ContentItemTwoImageAfter>
                    <Input type="range" min="0" max="100" defaultValue="50" onChange={(e) => {return handleChange(e)}}></Input>
                    <ContentItemTwoImagesButton className='WindowChangerButton'></ContentItemTwoImagesButton>
                    </ContentItemTwoImagesWrap>
                <ContentItemTwoSolutions>
                    <ContentItemTwoTextWrap alignItems="flex-end" data-aos="fade-left" data-aos-offset="10" data-aos-duration="1500">
                    <h3>Solutions.</h3>
                    <p>
                    ???????????? ?????????????????? ????????? ????????????, ????????? ????????? ???????????? ???????????? ???????????????????????????. ?????? ???????????? ????????? ??? ???????????? ????????? ????????????
                    ?????? ???????????? ????????? ????????? ?????????????????????.
                    </p>
                    </ContentItemTwoTextWrap>
                </ContentItemTwoSolutions>
            </ContentItemTwo>

            <ContentItemThree>
                <img src="./Images/culturecontent3.png" alt="2" data-aos="fade-right" data-aos-offset="100" data-aos-delay="200"/>
                <img src="./Images/culturecontenttab.png" alt="2" style={{position: "absolute", left: "45%", borderRadius: "20px"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="300"/>
                <img src="./Images/culturecontent3phone.png" alt="2" style={{borderRadius: "20px"}} data-aos="fade-right" data-aos-offset="100" data-aos-delay="400"/>
                <ContentItemThreeText>
                <h3>UI & UX.</h3>
                <p>???????????? ???????????? ???????????? ????????? ?????????, ????????? ????????? ???????????? ?????? ??????????????? ???????????? ?????? ??????????????? ????????? ???????????? ????????? ??? ????????? ??????????????? ?????????????????????.</p>
                </ContentItemThreeText>
            </ContentItemThree>

            <ContentItemFour>
                <ContentItemFourWrap>
                    <ContentItemFourColorsWrap>
                        <p>???????????? ??? ???????????? ??????, ???????????? ????????? ????????? ??? ??? ?????? ?????? ???????????? ?????????????????????.</p>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10">#143b63</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="180" data-aos-offset="10">#e8f0f9</ContentItemFourColorsItem>
                        <ContentItemFourColorsItem data-aos="fade-right" data-aos-duration="1500" data-aos-delay="210" data-aos-offset="10">Black & White</ContentItemFourColorsItem>
                    </ContentItemFourColorsWrap>
                    <ContentItemFourFontsWrap>
                        <p>???????????? ?????? ????????? ?????? ?????? ????????? ????????? ???????????? ????????? ????????? ??? ????????? ???????????????.</p>
                        <ReactTyped style={{fontSize: "18px", fontFamily: "nanumR"}}
                        strings={["From Rectangle, Share with love","Nanum-square Regular. 18px", "?????? ?????????"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "22px", fontFamily: "nanumR"}}
                        strings={["From Rectangle, Share with love","Nanum-square Regular. 22px", "?????? ?????????"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        <ReactTyped style={{fontSize: "32px", fontFamily: "nanumR"}}
                        strings={["From Rectangle, Share with love","Nanum-square Regular. 32px", "?????? ?????????"]}
                        typeSpeed={100}
                        backSpeed={50}
                        loop >   
                        </ReactTyped>
                        
                    </ContentItemFourFontsWrap>
                </ContentItemFourWrap>
            </ContentItemFour>
            <ContentItemFive>
                <ContentItemFiveText>
                    <h3>Main Page</h3>
                </ContentItemFiveText>
                <ContentItemFiveImagesDescWrap>
                    <img src="./Images/culturemain.png" alt='all' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="150" data-aos-offset="10"/>
                    <ContentItemFiveDescWrap>
                        <ContentItemFiveDescHeader data-aos="fade-right" data-aos-duration="1500" data-aos-offset="30">
                            <h3>Header.</h3>
                            <p>???????????? ????????? ???????????? ????????? ?????? ??????????????? ?????????????????????. ?????? ????????????????????? ????????? ?????? ???????????? ????????? ?????????????????????.</p>
                        </ContentItemFiveDescHeader>
                        <ContentItemFiveDescContent1 data-aos="fade-right" data-aos-duration="1500">
                            <h3>Main Menu.</h3>
                            <p>?????? ????????? ????????? ?????? ????????? ???????????? ???????????? ???????????? ???????????? ???????????? ???????????????.</p>
                        </ContentItemFiveDescContent1>
                        <ContentItemFiveDescContent2 data-aos="fade-right" data-aos-duration="1500">
                            <h3>Sub Menu.</h3>
                            <p>?????? ???????????? ????????? ??? ??? ????????? ?????????????????????. ????????? Hover ????????? ???, ????????? ????????? ?????? ?????? ???????????? ????????? ??? ????????? ????????? ????????????.</p>
                        </ContentItemFiveDescContent2>
                        <ContentItemFiveDescContent3 data-aos="fade-right" data-aos-duration="1500">
                            <h3>Notice.</h3>
                            <p>????????? ?????????????????? ????????? ??? ??? ????????? ?????????????????????. ?????? ????????? ????????? ????????? Swiper??? ?????????????????????.</p>
                        </ContentItemFiveDescContent3>
                        <ContentItemFiveDescContent4 data-aos="fade-right" data-aos-duration="1500">
                            <h3>Category.</h3>
                            <p>??????, ?????? ????????? ????????? ?????? ??? ??????????????? ?????? Curtain slide ????????? ?????????????????????. ?????? ???????????? Hover ??? ???????????? ????????? ??? ???????????? ?????? ???????????? ????????? ????????? ????????? ??? ??? ????????? ???????????????. </p>
                        </ContentItemFiveDescContent4>
                        <ContentItemFiveDescFooter data-aos="fade-right" data-aos-duration="1500">
                            <h3>Footer.</h3>
                            <p>?????? ???????????? ???????????? ?????? ????????? ???????????? ???????????? ????????? ???????????? ???????????? ???????????? ????????? ????????? ????????? ????????? ???????????? ???????????? ???????????????.</p>
                        </ContentItemFiveDescFooter>
                    </ContentItemFiveDescWrap>
                </ContentItemFiveImagesDescWrap>
            </ContentItemFive>

            <ContentNavigation>
            <ul>
                {
                    users.map((e,index)=>{
                        return <ContentNavigationLi key={e.id} color={e.color} onClick={() => clickEvent(e.link)}></ContentNavigationLi>
                    }) 
                }
            </ul>
            </ContentNavigation>
        </Content>
    </>
  )
}

export default Grandhyatt