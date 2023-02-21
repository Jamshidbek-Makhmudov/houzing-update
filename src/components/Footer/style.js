import styled from "styled-components";


const Container=styled.div`
background-color: var(--colorPrimary);
`

const FootTxt=styled.div`
padding-left: 16px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
color: white;
div{
    font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
}
`
const Wrapper=styled.div`
  width: 100%;
margin: 50px auto;
  min-width: 300px;
max-width: 1180px;
display: flex;
flex-wrap: wrap;
/* grid-template-columns: auto auto auto auto; */
gap: 172px;
`
const Footdiv=styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
padding-left: 16px;

margin: 20px 0;
`
const Footdivv=styled.div`
padding-left: 16px;

font-family: 'Montserrat';
width: 256px;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #FFFFFF;
/* margin: 20px 0; */
`
const MostFoot =styled.div`
margin: 10px auto;
max-width: 1180px;
display: flex;
flex-wrap: wrap;
align-items: center;
text-align: center;
justify-content: space-between;
`
const Cont =styled.div`
border-top: 1px solid  rgba(255, 255, 255, 0.15);

`
const Scrolltop =styled.div`
position: absolute;
right: 20px;
cursor: pointer;
:active{
    opacity: 0.5;
}
`





export {Container,Scrolltop, FootTxt,MostFoot,Cont, Wrapper, Footdiv, Footdivv  }