import styled from "styled-components";
import {Select} from "antd"

const Wrap=styled.div`
margin-top: 44px;
display: flex;
flex-wrap: wrap;
gap: 24px;
justify-content: space-between;
`
const SvBtn=styled.div`
display: flex;
justify-content: end;
margin: 32px 0;
`
const Cubes=styled.div`
width: 150px;
height: 150px;
background-color: #C4C4C4;
border-radius: 3px;
overflow: hidden;
/* height: 100%; */
overflow: hidden;
display: flex;
align-items: center;
justify-content: center;
`
const Ctg = styled.div`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
padding: 40px 0 20px 0;
`
const IMG =styled.img`
height: 100%;
`
const Checks=styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    /* justify-content: space-between; */
`
const InputWr =styled.div`
display: flex;
gap: 20px;
margin: 50px 0;
@media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`
const SelectAnt = styled(Select)`
border-bottom: 2px solid #E6E9EC;
/* bordered: none; */
.ant-select:not(.ant-select-customize-input) .ant-select-selector{
    width: 560px !important;
    height: 44px !important;
    align-items: center;
    padding: 0;
    margin: 0;
}
.ant-select-selector{
    width: 100%;
}
.ant-select .ant-select-borderless .sc-iJnaPW .dPPDYv .ant-select-single .ant-select-show-arrow{
    width: 560px !important;
}
`
export {Wrap, SvBtn, Cubes,SelectAnt, InputWr, Ctg, IMG, Checks}