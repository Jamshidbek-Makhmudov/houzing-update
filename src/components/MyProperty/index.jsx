import React, { useEffect, useState } from "react";
import EditCard from "../Card/EditCard";
import { Block, Section, Blocks, Part, Parts, Head, Partss } from "./style";
import { Inputs } from "./../Generic";

const MyProperties = () => {
  const [data, setData] = useState({});
  // const request = useRequest();
  // const params = useParams();
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    // params?.id &&
    fetch(`${url}/houses/me`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || {});
      });
  }, [url]);
  console.log(data, "my propert data");
  return (
    <>
      <Section>
        <Head>
          My properties
          <Inputs border={"none"} width={200} placeholder={"Search"} />
        </Head>
        <Block>
          <Blocks>
            <Part>
              <Partss>Listing title</Partss>
              <Parts>
                <div>Date published</div>
                <div>Status</div>
                <div>View</div>
                <div>Action</div>
              </Parts>
            </Part>
          </Blocks>
            {data.length ?
              data.map((value)=>(
                <Blocks>
                <EditCard key={value.id} data={value} />
          </Blocks>
              )) : <h1>No data found</h1>
            }
        </Block>
      </Section>
    </>
  );
};

export default MyProperties;
