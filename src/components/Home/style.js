import styled from "styled-components";

const Container = styled.div`

/* max-width: 1440px; */
`;
const Wrapper=styled.div`
display: flex;
    flex-direction: column;
    position: relative;
    margin: 96px auto auto;
    padding: 0px 130px;
    max-width: 1440px;
    width: 100%;
    @media only screen and (max-width: 768px) {
        display: none;
        margin: auto;
    }
`
const ContentHouse =styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 96px auto auto;
    padding: 0 !important;
    max-width: 1440px;
    width: 100%;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        display: flex;
        padding: 0 !important;
        flex-direction: column;
        margin: auto  !important;;
    }
    `
const Content =styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    margin: 96px auto auto;
    padding: 0px 130px;
    max-width: 1440px;
    width: 100%;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
    `
const Contented =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    position: relative;
    margin: 96px auto auto;
    padding: 0px 130px;
    max-width: 1440px;
    width: 100%;
    @media only screen and (max-width: 768px) {
        margin: auto !important;
        flex-direction: column;
    }
    `
const InvisibleRes = styled.div`
display: none;
@media only screen and (max-width: 768px) {
    display: block;
    margin: auto;
}
`

export {Container,Wrapper, Content, InvisibleRes, ContentHouse, Contented}