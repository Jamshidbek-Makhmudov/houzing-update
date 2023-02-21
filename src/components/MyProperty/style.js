import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center !important;
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
const Block = styled.div`
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  margin-top: 32px;
  position: relative;
  padding: 30px;
  max-width: 1180px;
  width: 100%;
  min-width: 300px;
`;
const Head = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  display: flex;
  margin-top: 34px;
  justify-content: space-between;
`;

const Blocks = styled.div`
  display: flex;
  /* max-width: 1440px; */
  width: 100%;
`;
const Part = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 20px;
`;
const Parts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 670px;
  min-width: 0px;
  overflow: hidden;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  z-index: 8;
  div {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
  }
`;
const Partss = styled.div`
  display: flex;
  z-index: 10;
  /* justify-content: space-between; */
  /* width: 100%; */
  /* max-width: 670px; */
  /* min-width: 0px; */
  /* overflow: hidden; */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  width: 230px;
  margin-right: 338px;
  white-space: nowrap;
`;
export { Section, Block, Blocks, Part, Parts, Head, Partss };
