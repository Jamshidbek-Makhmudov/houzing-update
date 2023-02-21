import styled from "styled-components";
import {Select} from "antd"


const Filtr=styled.div`
display: flex;
justify-content: center;
width: 100%;
gap: 20px;
max-width: 1440px;
padding: 10px 130px;
`
const MenuWrapper = styled.div`
padding: 10px 0px 0px 0px;
background-color: white;
border-radius: 5px;
`
const Section = styled.div`
@media only screen and(max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`
const Sectionss = styled.div`
display: flex;
gap: 20px;
padding: 10px 20px 20px 20px;
justify-content: center;
flex-wrap: wrap;
@media only screen and(max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`
const H1 = styled.h1`
display: flex;
gap: 20px;
padding:  0 20px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`
const Sections = styled.div`
padding: 10px 20px 20px 20px;
border-radius: 0px 0px 5px 5px;
display: flex;
justify-content: end;
background-color: #F6F8F9;
`
const SelectAnt = styled(Select)`
width: 200px;
.ant-select-selector{
    height: 44px !important;    
    align-items: center;
    padding: 0;
    margin: 0;
}
`
export {Filtr, MenuWrapper, Section, Sections, Sectionss, H1, SelectAnt}