import styled from "styled-components";

const Wrapper= styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
max-width: 243px;
min-width: 240px;
/* @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 243px;
    min-width: 240px;
  }; */
`;
const Cause= styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
padding-top: 30px;
/* padding: 10px; */
text-align: center;
`
const Txt= styled.div`
font-family: 'Montserrat';
text-align: center;
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
padding: 10px;
`


export {Wrapper, Cause, Txt}