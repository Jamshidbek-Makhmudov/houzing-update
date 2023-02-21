import styled from "styled-components";

const Container=styled.div`
background-color: #FEFEFE;
display: flex;
justify-content: center;
align-items: center;
height: 504px;
/* position: absolute; */
/* top: 65px; */
/* width: 100%; */
/* margin-bottom: 500px */
/* margin: auto; */
`

const Wrapper = styled.div`
box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
width: 100%;
border: 1px solid #E6E9EC;
max-width: 580px;
min-width: 359px;
background-color: white;
border-radius: 3px;
padding: 30px;
`
const Sign = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
padding-bottom: 30px;
`
const Forgot = styled.a`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-decoration: underline;
`
const RemFor=styled.div`
display: flex;
justify-content: space-between;
padding: 15px 0 30px 0;
`
const Input = styled.div`
padding-bottom: 20px;
`
export {Wrapper, Container, Sign, Forgot, RemFor, Input}