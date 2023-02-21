import styled from "styled-components";

const Container =styled.div`
width: 100%;
max-width: 380px;
min-width: 300px;
margin: auto;
background-color: white;
border: #E6E9EC solid 1px;
border-radius: 3px;
overflow: hidden;
transition: 0.9s;
:hover{
    box-shadow: 00px 00px 30px 3px #888888;
    z-index: 999;
}
`
const LikeWrapper =styled.div`
background-color: ${({favorite})=> (favorite ? `#CC5040` : `#F6F8F9`)};
    padding: 10px;
    border-radius: 50%;
    opacity: 0.7;
    size: 35px;
    line-height: 0;
    :hover{
        opacity: 1;
    }
`
const LikeImg= styled.img`
    & path{
        fill: ${({favorite})=>(favorite ? `` : '')};
    }
`

export {Container, LikeWrapper, LikeImg}