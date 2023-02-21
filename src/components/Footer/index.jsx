import React from "react"
import {
  Cont,
  Container,
  Footdiv,
  Footdivv,
  FootTxt,
  MostFoot,
  Scrolltop,
  Wrapper,
} from "./style"
import facebook from "./../../assets/icons/svg/facebookwhite.svg"
import twitter from "./../../assets/icons/svg/twitterwhite.svg"
import instagram from "./../../assets/icons/svg/instagramwhite.svg"
import linkedin from "./../../assets/icons/svg/linkedinwhite.svg"
import { H3, Logo, Section } from "../Navbar/style"
import { useNavigate } from "react-router-dom"
import LogoIMG from "./../../assets/icons/svg/Logo.svg"
import Up from "./../../assets/icons/svg/up.svg"

const Footer = () => {
  const navigate = useNavigate()

  const scrol = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <>
      <Container>
        <Wrapper>
          <div>
            <FootTxt>Contact Us</FootTxt>
            <div>
              <img src='' alt='' />
              <Footdivv>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Footdivv>
            </div>
            <div>
              <img src='' alt='' />
              <a href='tel: +821072772282'>
                <Footdivv>+821072772282</Footdivv>
              </a>
            </div>
            <div>
              <img src='' alt='' />
              <a href='mailto: jamshid.makh94@gmail.com'>
                <Footdivv>hope@gmail.com</Footdivv>
              </a>
            </div>
            <div>
              <div className='social-media-icon'>
                <a href='https://facebook.com/'>
                  <img src={facebook} alt='' />
                </a>
                <a href='https://twitter.com/'>
                  <img src={twitter} alt='' />
                </a>
                <a href='https://instagram.com/'>
                  <img src={instagram} alt='' />
                </a>
                <a href='https://facebook.com/'>
                  <img src={linkedin} alt='' />
                </a>
              </div>
            </div>
          </div>
          <div>
            <FootTxt>Discover</FootTxt>
            <Footdiv>Chicago</Footdiv>
            <Footdiv>Los Angeles</Footdiv>
            <Footdiv>Miami</Footdiv>
            <Footdiv>New York</Footdiv>
          </div>
          <div>
            <FootTxt>Lists by Category</FootTxt>
            <Footdiv>Apartments</Footdiv>
            <Footdiv>Condos</Footdiv>
            <Footdiv>Houses</Footdiv>
            <Footdiv>Offices</Footdiv>
            <Footdiv>Retail</Footdiv>
            <Footdiv>Villas</Footdiv>
          </div>
          <div>
            <FootTxt>Lists by Category</FootTxt>
            <Footdiv>About Us</Footdiv>
            <Footdiv>Terms & Conditions</Footdiv>
            <Footdiv>Support Center</Footdiv>
            <Footdiv>Contact Us</Footdiv>
          </div>
        </Wrapper>
        <Cont></Cont>
        <MostFoot>
          <Section onClick={() => navigate("./home")}>
            <Logo src={LogoIMG} />
            <H3>Houzing</H3>
          </Section>
          <Footdiv>
            Copyright © 2021 CreativeLayers. All Right Reserved.
          </Footdiv>
          <Scrolltop onClick={() => scrol()}>
            <img onClick={() => scrol()} src={Up} alt='' />
          </Scrolltop>
        </MostFoot>
      </Container>
    </>
  )
}

export default Footer
