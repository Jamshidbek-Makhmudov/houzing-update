import React, { useEffect, useState } from "react";
import "./style.css";
// import house from "./../../../assets/img/PHouse1.jpg";
import noImage from "./../../../assets/img/noImage.webp";
import edit from "./../../../assets/icons/svg/edit.svg";
import trash from "./../../../assets/icons/svg/trash.svg";

const EditCard = ({data}) => {
  const [delet, setDelete] = useState({});
  const { REACT_APP_BASE_URL: url } = process.env;
  const {description, city, region, country, price, salePrice, attachments, status, id}=data

 const del = useEffect(() => {
    fetch(`${url}/houses/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        setDelete(res?.data || {});
      });
  }, [url, id]);
  console.log(delet, "deleted");

  return (
    <>
      <div className="mywrapper">
        <div className="headwrapper">
        <div className="imgWrapper">
          <img src={attachments[0].imgPath || noImage} alt="" />
          <div className="Sallelight">FEATURED</div>
          <div className="Salle">FOR SALE</div>
        </div>
        <div>

        <div>
          <div className="Apartment">
            <div className="name inline">
              {description || "New Apartment Nice Wiew"}
            </div>
            <div className="txt inline">
              {`${city}, ${region}, ${country}` ||
                // `${address}, ${city}, ${country}, ${category?.name}`
                "Brooklyn"}
            </div>
                </div>
          </div>
          <div className="prices">
            <p className="line">${price || 0}/mo,</p>
            <div className="price">${salePrice || 0}/mo</div>
          </div>
                </div>
        </div>

        <div className="argInfo">
          <p>30 December 2022</p>
          <p>{status ? "Pending" : "Sold"}</p>
          <p>{id || 0}</p>
          <div>ㅤㅤㅤㅤㅤ</div>
          <div className="edit">
            <div onClick={del}>
            <img src={edit} alt="" />
            </div>
            <div>
            <img src={trash} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCard;
