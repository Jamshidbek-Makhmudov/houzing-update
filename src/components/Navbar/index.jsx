import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Section,
  Logo,
  Link,
  H3,
  Main,
  Main2,
  Nav,
  PhoneNavbar,
  LoginButton,
  LoginIcon,
  DropdownWr,
  DropdownMenu,
} from "./style";
import LogoIMG from "./../../assets/icons/svg/Logo.svg";
import login from "./../../assets/icons/svg/login.svg";
import { navbar } from "../../utils/navbar";
import { Buttons } from "../Generic";
import Filter from "../Filter";
import NavbarForPhone from "./ForPhone";
import Footer from "../Footer";
import { Button, Dropdown } from "antd";

function Navbar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    navigate("./signin");
  };
  const onClickProfile = ({target:{value, dataset:{name}}}) => {
    if(name==="logout"){
      localStorage.removeItem('token')
      navigate("./home");
    }else{
      navigate(`${name}`);
      
    }
  };
  const menu = () => (<DropdownWr>
    <DropdownMenu data-name="my-property" onClick={onClickProfile}>My properties</DropdownMenu>
    <DropdownMenu data-name="addnew" onClick={onClickProfile}>Add property</DropdownMenu>
    <DropdownMenu data-name="favorite" onClick={onClickProfile}>Favourites</DropdownMenu>
    <DropdownMenu data-name="logout" onClick={onClickProfile}>Log out</DropdownMenu>
  </DropdownWr>);
  return (
    <Container>
      <Main>
        <Wrapper>
          <PhoneNavbar>
            <NavbarForPhone />
          </PhoneNavbar>
          <Section onClick={() => navigate("./home")}>
            <Logo src={LogoIMG} />
            <H3>Houzing</H3>
          </Section>
          <Section>
            <Nav>
              {navbar.map(
                (value, index) =>
                  !value.hidden && (
                    <Link
                      key={index}
                      className={({ isActive }) => isActive && "active"}
                      to={value.path}
                    >
                      {value.title}
                    </Link>
                  )
              )}
            </Nav>
          </Section>
          <Section>
            {token ? (
              <>
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
                      background: "transparent",
                      border: "none",
                    }}
                  >
                    <>
                      <LoginButton>
                        <Buttons
                          width={128}
                          txt={"Profile"}
                          // border={"none"}
                          color={"white"}
                          background={"transparent"}
                        />
                      </LoginButton>
                      <LoginIcon>
                        <img src={login} alt="" />
                      </LoginIcon>
                    </>
                  </Button>
                </Dropdown>
              </>
            ) : (
              <>
                <LoginButton>
                  <Buttons width={128} onClick={onClick} txt={"Login"} />
                </LoginButton>
                <LoginIcon onClick={onClick}>
                  <img src={login} alt="" />
                </LoginIcon>
              </>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Main2>
        <Filter />
      </Main2>
      <Outlet />
      <Footer />
    </Container>
  );
}

export default Navbar;
