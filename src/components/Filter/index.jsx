import React, { useEffect, useRef, useState } from "react";
import { Buttons, Inputs } from "../Generic";
import { Filtr, H1, MenuWrapper, Section, Sections, Sectionss, SelectAnt } from "./style";
import loupe from "./../../assets/icons/svg/loupeWhite.svg";
import setting from "./../../assets/icons/svg/Settings.svg";
import house from "./../../assets/icons/svg/house.svg";
import { Button, Dropdown } from "antd";
import { uzeReplace } from "./../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/uzeSearch";

function Filter() {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");
  const location = useLocation();
  const navigate = useNavigate();
  const params = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const roomsRef = useRef();
  const minRef = useRef();
  const maxRef = useRef();

  useEffect(()=>{
    if( params.get('category_id')){
      let [res]= data.filter((ctg)=> ctg.id === Number(params.get('category_id')))
      setValue(res?.name)
    }
  }, [data, params])
  
  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
        // console.log(res);
      });
  }, [url]);
  // console.log(data, "filter");

  // console.log(params.get("country"), "params");
  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  const onChangeSort =(sort)=>{
    navigate(`/properties${uzeReplace("sort", sort)}`)
  }
  const onChangeCategory =(category_id)=>{
    // console.log(category_id, "select");
    navigate(`/properties${uzeReplace("category_id", category_id)}`)
  }

  const menu = () => (
    <MenuWrapper>
      <Section>
        <H1>Address</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("country")}
            onChange={onChange}
            ref={countryRef}
            width={200}
            name={"country"}
            placeholder={"Country"}
          />
          <Inputs
            defaultValue={params.get("region")}
            onChange={onChange}
            name={"region"}
            ref={regionRef}
            width={200}
            placeholder={"Region"}
          />
          <Inputs
          onChange={onChange}
            defaultValue={params.get("city")}
            ref={cityRef}
            width={200}
            name={"city"}
            placeholder={"City"}
          />
          <Inputs
            defaultValue={params.get("zip_code")}
            onChange={onChange}
            ref={zipRef}
            width={200}
            name={"zip_code"}
            placeholder={"Zip code"}
          />
        </Sectionss>
      </Section>
      <Section>
        <H1>Apartment info</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("room")}
            name={"room"}
            onChange={onChange}
            ref={roomsRef}
            width={200}
            placeholder={"Rooms"}
          />
          <SelectAnt name="" id="" defaultValue={params.get("Sort") || "Select Sort"} onChange={onChangeSort}>
            <SelectAnt.Option value='asc'>O'suvchi</SelectAnt.Option>
            <SelectAnt.Option value='desc'>Kamayuvchi</SelectAnt.Option>
            </SelectAnt>
          <SelectAnt name="" id="" defaultValue={value} onChange={onChangeCategory}>
          {data.map((value)=>(
            <SelectAnt.Option key={value?.id} value={value?.id}>{value?.name}</SelectAnt.Option>
            ))}
            </SelectAnt>
        </Sectionss>
      </Section>
      <Section>
        <H1>Price</H1>
        <Sectionss>
          <Inputs
            defaultValue={params.get("min_price")}
            onChange={onChange}
            name={"min_price"}
            ref={minRef}
            width={200}
            placeholder={"Min price"}
          />
          <Inputs
            defaultValue={params.get("max_price")}
            onChange={onChange}
            name={"max_price"}
            ref={maxRef}
            width={200}
            placeholder={"Max price"}
          />
        </Sectionss>
      </Section>
      <Sections>
        <Sectionss>
          <Buttons border={"#0D263B 2px solid"} txt={"Cancel"} />
          <Buttons background={"#0061DF"} color={"white"} txt={"Submit"} />
        </Sectionss>
      </Sections>
    </MenuWrapper>
  );

  return (
    <>
      <Filtr>
        <Inputs
          icon={house}
          placeholder={"Enter an address, neighborhood, city, or ZIP code"}
        />
        <Dropdown
          trigger={["click"]}
          dropdownRender={menu}
          placement="bottomRight"
          arrow
        >
          <Button
            style={{
              width: "140px",
              height: "44px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Buttons
              img={setting}
              // width={140}
              border={"none"}
              background={""}
              txt={"Advanced"}
            />
          </Button>
        </Dropdown>

        <Buttons
          img={loupe}
          background="#0061df"
          width={180}
          color="white"
          txt={"Search"}
        />
      </Filtr>
    </>
  );
}

export default Filter;
