import React, { useEffect, useState } from 'react'
import HousesCard from '../Card/HousesCard'
import Text from '../Carousel/Text';
import { Container, Wrapper } from '../Properties/style';

const Favorites = () => {
  const [data, setData] = useState({});
  // const request = useRequest();
  // const params = useParams();
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    // params?.id &&
      fetch(`${url}/houses/getAll/favouriteList`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || {});
        });
  }, [url]);
  // console.log(data?.attachments[0]?.imgPath, "fetch data");

  console.log(data, "params data");
  return (
    <>
    
    <Text
          theme={"Favorite"}
          txt={
            "Nulla quis curabitur velit volutpat auctor bibendum consectetur sit."
          }
        />
        <Wrapper>
        <Container>
        {data.length ? data.map((value)=>(
          <HousesCard key={value.id} data={value}/>
          )) :<h1>No data found</h1>}
        <div style={{display: "none"}}>
        {/* <HousesCard/> */}
        </div>
          </Container>
          </Wrapper>
    
    </>
  )
}

export default Favorites