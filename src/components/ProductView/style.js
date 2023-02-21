import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center !important;
  align-items: center;
  flex-direction: column;
  background-color: #fefefe;
  padding: var(--padding);
  max-width: 1440px;
  @media only screen and (min-width: 1441px) {
    margin-left: 40px;
    padding: var(--padding);
  }
  @media only screen and (min-width: 1027px) {
    margin-left: 40px;
    /* padding: var(--padding); */
  }
  @media only screen and (max-width: 426px) {
    margin-left: 0px;
    padding: 0 0 !important;
  }
  @media only screen and (max-width: 376px) {
    margin-left: 0px;
    padding: 0 0 !important;
  }
`;
const Wrapper = styled.div`
/* display: flex; */

`
const Container = styled.div`
width: 100%;
max-width: 880px;
min-width: 345px;
`
const Txt=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 32px;
margin-top: 25px;
`
const ContainerWr =styled.div`
display: flex;
justify-content: space-between;
`
const Send =styled.div`
margin-top: 24px;
display: flex;
width: 280px;
height: 500px;
border: 1px solid #E6E9EC;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 24px;
padding: 20px;
@media only screen and(max-width: 1024px) {
  /* display: none !important; */
  background: #000;
}
`
const SmTxt=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 28px;
margin-top: 50px;
margin-bottom: 16px;
`
export {Wrapper,Send, Section,Txt, Container, ContainerWr, SmTxt}