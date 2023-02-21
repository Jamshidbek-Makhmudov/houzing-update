import styled from "styled-components";

const Container = styled.div`
display: grid;
grid-template-columns: auto auto auto;
gap: 20px;
width: 100%;
margin-top: 100px;
max-width: 1440px;
min-width: 300px;
@media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: auto ;
        padding: 0 !important;
        margin: auto  !important;;
    }
`;
const Wrapper = styled.div`
/* padding-top: 100px; */
max-width: 1440px;
min-width: 300px;
    width: 100%;
    padding: var(--padding);
    margin: auto;
    @media only screen and (max-width: 768px) {
        padding: 0 !important;
        margin: auto  !important;;
    }
    `
const PAgina=styled.div`
margin-top: 50px;
`
const ButtonsWrPr =styled.div`
margin: 50px auto;
display: flex;
align-items: center;
justify-content: center;

`

export {Container, PAgina, Wrapper, ButtonsWrPr}