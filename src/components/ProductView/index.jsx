import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import avatar from "./../../assets/img/avatar.jpg"
// import HousesCard from '../Card/HousesCard'
import { Container, ContainerWr, Section, Send, SmTxt, Txt } from "./style.js";
// import useRequest from "../../hooks/useRequest.js";
import noImage from "./../../assets/img/noImage.webp";
import { Inputs, Buttons } from "./../Generic";
import { Wrapper } from "./style.js";
import share from "./../../assets/icons/svg/share.svg";
import like from "./../../assets/icons/svg/Like.svg";
import bed from "./../../assets/icons/svg/bed.svg";
import bath from "./../../assets/icons/svg/bath.svg";
import car from "./../../assets/icons/svg/car.svg";
import ruler from "./../../assets/icons/svg/ruler.svg";
import calendar from "./../../assets/icons/svg/calendar.svg";
import pdfDownload from "./../../assets/icons/svg/pdfDownload.svg";
import "./style.css";
import { SelectAnt } from "../AddNewProperty/style.js";
import { Checkbox } from "antd";
import Yandex from "../Maps";

const View = () => {
  const [data, setData] = useState({});
  // const request = useRequest();
  const params = useParams();
  const { REACT_APP_BASE_URL: url } = process.env;

  useEffect(() => {
    params?.id &&
      fetch(`${url}/houses/id/${params?.id}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res?.data || {});
        });
  }, [url, params?.id]);

  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
  };
  // console.log(data, "params data");
  // console.log(data?.location, "location")
  return (
    <>
      <Section>
        <Wrapper>
          <div className="imgWrap">
            <div className="bgImgWrap">
              <img
                src={
                  (data?.attachments && data?.attachments[0]?.imgPath) ||
                  noImage
                }
                alt=""
              />
            </div>
            <div className="smImgWrap">
              <div className="smImgChild">
                <img src={noImage} alt="" />
              </div>
              <div className="smImgChild">
                <img src={noImage} alt="" />
              </div>
              <div className="smImgChild">
                <img src={noImage} alt="" />
              </div>
              <div className="smImgChild">
                <img src={noImage} alt="" />
              </div>
            </div>
          </div>
          <ContainerWr>
            <Container>
              <div className="nameWr">
                <div>
                  <Txt>Luxury Family Loft by Victoria Park</Txt>
                  <div className="addressed">
                    {" "}
                    {data?.address}, {data?.city}, {data?.country},{" "}
                    {data?.category?.name}
                  </div>
                  <div className="rooms">
                    <div className="rooms_inner">
                      <img src={bed} alt="" />
                      <div className="universalTxt">
                        {data?.houseDetails?.beds} Beds
                      </div>
                    </div>
                    <div className="rooms_inner">
                      <img src={bath} alt="" />
                      <div className="universalTxt">
                        {data?.houseDetails?.bath} Bath
                      </div>
                    </div>
                    <div className="rooms_inner">
                      <img src={car} alt="" />
                      <div className="universalTxt">
                        {data?.houseDetails?.garage} Garages
                      </div>
                    </div>
                    <div className="rooms_inner">
                      <img src={ruler} alt="" />
                      <div className="universalTxt">
                        {data?.houseDetails?.area} Sq Ft
                      </div>
                    </div>
                    <div className="rooms_inner">
                      <img src={calendar} alt="" />
                      <div className="universalTxt">
                        {" "}
                        Year built: {data?.houseDetails?.yearBuilt}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="buttonsss">
                    <p>
                      {" "}
                      <div className="btnimgwr">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Share</div>
                    </p>
                    <p>
                      {" "}
                      <div className="btnimgwr">
                        <img src={like} alt="" />
                      </div>
                      <div className="universalTxt">Save</div>
                    </p>
                  </div>
                  <div className="prise">
                    <p className="lined">${data?.price || 0}/mo,</p>
                    <div className="priced">${data?.salePrice || 0}/mo</div>
                  </div>
                  <div className="universalTxt mort">
                    {data?.user?.firstname}
                  </div>
                </div>
              </div>
              <SmTxt>Description</SmTxt>
              <div className="universalTxt">
                {data?.description === "string"
                  ? `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                laudantium, iure iusto facilis iste corporis omnis cumque veniam
                doloremque! Sit quas et ea cum totam officiis eveniet earum
                excepturi ipsa?`
                  : data?.description}
              </div>
              <a href="download.me" className="universalTxt">
                Show more
              </a>
              <SmTxt>Downloads</SmTxt>
              <div className="rooms">
                <div className="rooms_inner">
                  <img src={pdfDownload} alt="" />
                  <div className="universalTxt">test_property.pdf</div>
                  <a href="download.me" className="download">
                    {" "}
                    Download
                  </a>
                </div>
                <div className="rooms_inner">
                  <img src={pdfDownload} alt="" />
                  <div className="universalTxt">test_property.pdf</div>
                  <a href="download.me" className="download">
                    {" "}
                    Download
                  </a>
                </div>
                <div className="rooms_inner">
                  <img src={pdfDownload} alt="" />
                  <div className="universalTxt">test_property.pdf</div>
                  <a href="download.me" className="download">
                    {" "}
                    Download
                  </a>
                </div>
              </div>
              <div className="bordererr">
                <SmTxt>Location</SmTxt>
                <div className="detaill">
                  <div className="colum">
                    <div className="row">
                      <div className="names">Address:</div>
                      <div className="universalTxt">{data?.address}</div>
                    </div>
                    <div className="row">
                      <div className="names">State/County:</div>
                      <div className="universalTxt">{data?.city}</div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="names">City:</div>
                      <div className="universalTxt">{data?.city}</div>
                    </div>
                    <div className="row">
                      <div className="names">Zip:</div>
                      <div className="universalTxt">
                        {data?.zipCode === "string" ? 0 : data?.zipCode}
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="names">Area:</div>
                      <div className="universalTxt">{data?.country}</div>
                    </div>
                    <div className="row">
                      <div className="names">Country:</div>
                      <div className="universalTxt">{data?.country}</div>
                    </div>
                  </div>
                </div>
                <h1><Yandex longitude={data?.location?.longitude} latitude={data?.location?.latitude}/></h1>
              </div>

              <section className="bordererr">
                <SmTxt>Property Details</SmTxt>
                <div className="detaill">
                  <div className="colum">
                    <div className="row">
                      <div className="names">Property ID:</div>
                      <div className="universalTxt">{data?.id}</div>
                    </div>
                    <div className="row">
                      <div className="names">Price:</div>
                      <div className="universalTxt">{data?.price}</div>
                    </div>
                    <div className="row">
                      <div className="names">Property Size:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.area}
                      </div>
                    </div>
                    <div className="row">
                      <div className="names">Year built:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.yearBuilt}
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="names">Bedrooms:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.beds}
                      </div>
                    </div>
                    <div className="row">
                      <div className="names">Bathrooms:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.bath}
                      </div>
                    </div>
                    <div className="row">
                      <div className="names">Garage:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.garage}
                      </div>
                    </div>
                    <div className="row">
                      <div className="names">Garage size:</div>
                      <div className="universalTxt">
                        {data?.houseDetails?.garage}
                      </div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="names">Property Type:</div>
                      <div className="universalTxt">{data?.category?.name}</div>
                    </div>
                    <div className="row">
                      <div className="names">Property Status:</div>
                      <div className="universalTxt">{`${data?.status}` || 0}</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bordererr">
                <SmTxt>Features</SmTxt>
                <div className="detaill">
                  <div className="colum">
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Air Conditioning</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Barbeque</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Dryer</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Gym</div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Lawn</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Laundry</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Microwave</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Outdoor Shower</div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Refrigerator</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Sauna</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Swimming Pool</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">TV Cable</div>
                    </div>
                  </div>
                  <div className="colum">
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Washer</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">WiFi</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Window Coverings</div>
                    </div>
                    <div className="row">
                      <div className="btnimgwr names">
                        <img src={share} alt="" />
                      </div>
                      <div className="universalTxt">Dining room</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bordererr">
                <SmTxt>Schedule A Tour</SmTxt>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Inputs placeholder={"Date"} border />
                  <SelectAnt
                    siza={"large"}
                    bordered={false}
                    name=""
                    id=""
                    value={"Time"}
                  >
                    <SelectAnt.Option value="">10.00</SelectAnt.Option>
                    <SelectAnt.Option value="">11.00</SelectAnt.Option>
                  </SelectAnt>
                </div>
                <div className="schedule">Your Information</div>
                <div style={{ display: "flex", gap: "20px" }}>
                  <Inputs placeholder={"Name"} border />
                  <Inputs placeholder={"Phone"} border />
                  <Inputs placeholder={"Email"} border />
                </div>
                <div className="schedule">
                  <Inputs placeholder={"Enter Your Message"} border />
                </div>
                <Buttons
                  txt={"Submit a tour request"}
                  width={250}
                  background={"#0061DF"}
                  color={"white"}
                />
              </section>
              <section className="bordererr">
                <SmTxt>4.67 (14 reviews)</SmTxt>
                <div className="column">
                  <div></div>
                  <div></div>
                </div>
              </section>
            </Container>
            <Send>
              <div className="userInfo">
                <div className="aavatarWr">
                  <img className="aavatarImg" src={avatar} alt="" />
                </div>
                <div>
                  <div className="userName">Ibrohim Uraimov</div>
                  <div className="universalTxt">+998 93 402 5776</div>
                </div>
              </div>
              <Inputs border={"none"} placeholder={"Name"} />
              <Inputs border={"none"} placeholder={"Phone"} />
              <Inputs border={"none"} placeholder={"Email"} />
              <Inputs border={"none"} placeholder={"Message"} />
              <Checkbox className="universalTxt center" onChange={onChange}>
                By submitting this form I agree to Terms of Use
              </Checkbox>
              <Buttons
                txt={"Send request"}
                background={" #0061DF"}
                width={232}
                color={"white"}
              />
            </Send>
          </ContainerWr>
        </Wrapper>
        {/* data?.attachments[0].imgPath */}
      </Section>
    </>
  );
};

export default View;
