import React from "react";
import { ButtonsWrPr, Container, Wrapper } from "./style";
import { useEffect, useState } from "react";
import HousesCard from "./../Card/HousesCard";
import { useLocation } from "react-router-dom";
import Text from "../Carousel/Text";
import { Buttons } from "../Generic";
// import Pagination from "../Pagination";

const Propertys = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, [url, search]);
  return (
    <>
      <Text
        theme={"Properties"}
        txt={
          "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
        }
      />
      <Wrapper>
        <Container>
          {data.map((value) => (
            <HousesCard key={value.id} data={value} />
          ))}
        </Container>
          {/* <PAgina>
                <Pagination Pages={50}/>

               </PAgina> */}
        <ButtonsWrPr>
          <Buttons
            txt={"Show more"}
            background={"#0061DF"}
            width={250}
            color={"white"}
          />
        </ButtonsWrPr>
      </Wrapper>
    </>
  );
};

export default Propertys;
