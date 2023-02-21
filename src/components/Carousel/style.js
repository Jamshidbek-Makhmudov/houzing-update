import styled from "styled-components";

const Container =styled.div`
width: 100%;
background: #000;
display: flex;
justify-content: center;
flex-direction: column;
`
const Content =styled.div`

height: fit-content;
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
line-height: 160px;
background: #364d79;
width: 100%;
opacity: 0.5;
@media only screen and (max-width: 768px) {
    height: 712px;
    /* width: 100%; */
    overflow: hidden;

}
`
const ContentC=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
max-width: 500px;
min-width: 310px;
margin:auto;
/* background: #000; */
@media only screen and(max-width: 768px) {
    display: none !important;
}
`
const Contents =styled.div`
width: 100%;
max-width: 1440px;
min-width: 310px;
margin:auto;
position: absolute;
top: 140px;
display: flex;
overflow: hidden;
flex-direction: column;
align-items: center;
justify-content: center;
@media only screen and(max-width: 768px) {
    display: none;
    /* opacity: 0; */
}
`

const Text =styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 200px;
`
const H1 = styled.h1`
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 44px;
line-height: 48px;
width: 100%;
text-align: center;
max-width: 100%;
min-width: 300px;
color: white;
`
const P = styled.p`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
text-align: center;

    font-size: 16px;
    line-height: 24px;
    
max-width: 1440px;
min-width: 300px;
color: white;
`
const Div = styled.div`
    font-family: Montserrat;
text-align: center;
    color: white;
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    
max-width: 1440px;
min-width: 300px;
    line-height: 36px;
    letter-spacing: -0.02em;
    padding-bottom: 60px;
color: white;
`
const IMG =styled.img`
z-index: 999;
opacity: 0.6;
width: 45px;
position: absolute;
:nth-child(3){
    opacity: 0.6;
    position: absolute;
    right: 20px;
    :hover{
        opacity: 1;
    }
}
:nth-child(1){
    opacity: 0.6;
    position: absolute;
    left: 20px;
    :hover{
        opacity: 1;
    }
}
:hover{
    opacity: 1;
}
`
// const Position = styled.div`
// position: absolute;
// top: 50px;
// z-index: 888;
// left: 50px;
// `

export {Container, Content, Contents, ContentC, Text, H1, P, Div, IMG}