import React, { useState } from "react";
import { Buttons, Inputs } from "../Generic";
import { Block, Head, Partss, Section } from "../MyProperty/style";
import { Checkbox, message } from "antd";
import { Ctg, Cubes, IMG, InputWr, SelectAnt, SvBtn, Wrap } from "./style";
import noImage from "./../../assets/img/noImage.webp";
import "./style.css";
import Yandex from "../Maps";
import useRequest from "../../hooks/useRequest";
import { useNavigate } from "react-router-dom";

const AddNewProperties = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [errors, setError] = useState(false);
  const request = useRequest();
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const onChanges = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });

    setError(false);
  };

  const info = () => {
    message.info("Successfully added");
  };
  const warning = () => {
    message.warning(`Something went wrong ${errors}`);
  };

  const onSubmit = async () => {
    try {
      request({
        url: `/houses`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
        body,
      }).then((res) => {
        console.log(res, "post property");
        if (res?.authenticationToken) {
          navigate(`/my-property`);
          localStorage.getItem("token", res?.authenticationToken);
          info();
        }
      });
    } catch (error) {
      warning();
    }
  };

  return (
    <>
      <Section>
        <Head>Add new property</Head>
        <Block>
          <Partss>Contact information</Partss>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <Inputs
              onChange={onChanges}
              name={"name"}
              border={"none"}
              placeholder={"Property title*"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Type*"}
            />
          </div>
          <Inputs
            onChange={onChanges}
            name={"description"}
            border={"none"}
            placeholder={"Property Description*"}
          />
        </Block>

        <Block>
          <Partss>Additional</Partss>
          <InputWr>
            <Inputs
              onChange={onChanges}
              name={"zipCode"}
              border={"none"}
              placeholder={"Property ID"}
            />
            <SelectAnt
              siza={"large"}
              bordered={false}
              name=""
              id=""
              value={"Parent property"}
            >
              <SelectAnt.Option value="">O'suvchi</SelectAnt.Option>
              <SelectAnt.Option value="">Kamayuvchi</SelectAnt.Option>
            </SelectAnt>
            <SelectAnt
              siza={"large"}
              bordered={false}
              name=""
              id=""
              value={"Status"}
            >
              <SelectAnt.Option value="">O'suvchi</SelectAnt.Option>
              <SelectAnt.Option value="">Kamayuvchi</SelectAnt.Option>
            </SelectAnt>
          </InputWr>
          <InputWr>
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Label"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Material"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Rooms"}
            />
          </InputWr>
          <InputWr>
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Beds"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Baths"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Garages"}
            />
          </InputWr>
          <InputWr>
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Year build"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Home area (sqft)"}
            />
            <Inputs
              onChange={onChanges}
              name={"categoryId"}
              border={"none"}
              placeholder={"Lot dimensions"}
            />
          </InputWr>
          <Inputs
            onChange={onChanges}
            name={"categoryId"}
            border={"none"}
            placeholder={"Lot area (sqft)"}
            width={360}
          />
        </Block>

        <Block>
          <Partss>Price</Partss>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <Inputs
              onChange={onChanges}
              name={"price"}
              border={"none"}
              placeholder={"Price ($)"}
            />
            <Inputs
              onChange={onChanges}
              name={"salePrice"}
              border={"none"}
              placeholder={"Price Prefix"}
            />
          </div>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <Inputs border={"none"} placeholder={"Price Suffix"} />
            <Inputs border={"none"} placeholder={"Price Custom"} />
          </div>
        </Block>

        <Block>
          <Partss>Location</Partss>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <SelectAnt
              siza={"large"}
              bordered={false}
              name=""
              id=""
              value={"Regions"}
            >
              <SelectAnt.Option value="">O'suvchi</SelectAnt.Option>
              <SelectAnt.Option value="">Kamayuvchi</SelectAnt.Option>
            </SelectAnt>
            <Inputs
              onChange={onChanges}
              name={"address"}
              border={"none"}
              placeholder={"Friendly address"}
            />
          </div>
          <Inputs
            onChange={onChanges}
            name={"categoryId"}
            border={"none"}
            placeholder={"Map location"}
          />
          <h1 className="mapWr">
            <Yandex longitude={body.longitude} latitude={body.latitude} />
          </h1>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <Inputs
              onChange={onChanges}
              name={"latitude"}
              border={"none"}
              placeholder={"Latidude"}
            />
            <Inputs
              onChange={onChanges}
              name={"longitude"}
              border={"none"}
              placeholder={"Longitude"}
            />
          </div>
        </Block>

        <Block>
          <Partss>Media</Partss>
          <div>
            <Ctg>Featured image</Ctg>
            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
                flexWrap: "wrap",
              }}
            >
              <Cubes>
                <IMG src={noImage} alt="" />
              </Cubes>
              <Cubes>
                <IMG src={noImage} alt="" />
              </Cubes>
              <Cubes>
                <IMG src={noImage} alt="" />
              </Cubes>
              <Cubes>
                <IMG src={noImage} alt="" />
              </Cubes>
            </div>
          </div>
          <Buttons
            txt={"Upload"}
            border={"1px solid #0061DF"}
            color={"#0061DF"}
          />
          <Ctg>Gallery</Ctg>
          <Buttons
            txt={"Upload"}
            border={"1px solid #0061DF"}
            color={"#0061DF"}
          />
          <Ctg>Attachment</Ctg>
          <Buttons
            txt={"Upload"}
            border={"1px solid #0061DF"}
            color={"#0061DF"}
          />
          <div style={{ padding: "20px 0 20px 0" }}>
            <Inputs border={"none"} placeholder={"Video link"} />
          </div>
          <div style={{ padding: "20px 0 20px 0" }}>
            <Inputs border={"none"} placeholder={"Virtual tour"} />
          </div>
        </Block>

        <Block>
          <Partss>Amenities</Partss>
          <Wrap>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Checkbox onChange={onChange}>Air conditioning</Checkbox>
              <Checkbox onChange={onChange}>Barbeque</Checkbox>
              <Checkbox onChange={onChange}>Dryer</Checkbox>
              <Checkbox onChange={onChange}>Gym</Checkbox>
              <Checkbox onChange={onChange}>Laundry</Checkbox>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Checkbox onChange={onChange}>Lawn</Checkbox>
              <Checkbox onChange={onChange}>Microwave</Checkbox>
              <Checkbox onChange={onChange}>Outdoor Shower</Checkbox>
              <Checkbox onChange={onChange}>Refrigerator</Checkbox>
              <Checkbox onChange={onChange}>Stunning views</Checkbox>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Checkbox onChange={onChange}>Dining Room</Checkbox>
              <Checkbox onChange={onChange}>Fireplace</Checkbox>
              <Checkbox onChange={onChange}>Pets Allowed</Checkbox>
              <Checkbox onChange={onChange}>Unit Washer/Dryer</Checkbox>
              <Checkbox onChange={onChange}>Onsite Parking</Checkbox>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <Checkbox onChange={onChange}>Parking</Checkbox>
              <Checkbox onChange={onChange}>Central Heating</Checkbox>
              <Checkbox onChange={onChange}>Waterfront</Checkbox>
              <Checkbox onChange={onChange}>Cleaning Service</Checkbox>
              <Checkbox onChange={onChange}>Doorman</Checkbox>
            </div>
          </Wrap>
        </Block>
        <Block>
          <Partss>Select Energy Class</Partss>
          <div style={{ display: "flex", gap: "20px", margin: "50px 0" }}>
            <Inputs border={"none"} placeholder={"Energy class"} />
            <Inputs border={"none"} placeholder={"Energy Index in kWh/m2a"} />
          </div>
        </Block>
        <SvBtn>
          <Buttons
            onClick={onSubmit}
            txt={"Save"}
            background={"#0061DF"}
            color={"white"}
            width={280}
          />
        </SvBtn>
      </Section>
    </>
  );
};

export default AddNewProperties;
