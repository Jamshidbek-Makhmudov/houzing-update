import React from 'react'
import "./style.css"
import noImage from "./../../../assets/img/noImage.webp"
import { useNavigate } from 'react-router-dom'

function CategoryCard({data}) {
  const navigate = useNavigate()
  const {name, img, id, icon, categoryIcon}= data
  return (
    <>
        <div onClick={()=>navigate(`/properties?category_id=${id}`)} id={id} className='wrapper'>
            <img className="imgc" src={img=== null ? noImage : img || img=== undefined ? noImage : img } alt=''/>
            <div>
                <img className='iconc' src={icon || categoryIcon} alt="" />
                <p>{name || "Apartment"}</p>
                {/* <div>asdas</div> */}
            </div>
        </div>
    </>
  )
}

export default CategoryCard