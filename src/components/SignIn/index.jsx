import React, { useState } from "react";
import { Buttons, Inputs } from "./../Generic";
import { Checkbox, message } from "antd";
import { Container, Forgot, Input, RemFor, Sign, Wrapper } from "./style";
import { useRequest } from "./../../hooks/useRequest";
import { useNavigate } from "react-router-dom";
const SignIn = () => {
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
    message.info("Success");
  };
  // const warning = () => {
  //   message.warning(`Error password or email ${errors}`);
  // };
  const onSubmit = async () => {
    try {
      request({
        me: true,
        url: `/public/auth/login`,
        method: "POST",
        body,
      }).then((res) => {
        if (res?.authenticationToken) {
          navigate(`/my-property`);
          localStorage.setItem("token", res?.authenticationToken);
          info();
        } else {
          message.warning("Something went wrong");
        }
      });
    } catch (error) {
      // warning()
      console.log(errors);
      message.warning("Something went wrong");
    }
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Sign>Sign in</Sign>
          <Input>
            {/* <div>Login</div> */}
            <Inputs
              border={"none"}
              onChange={onChanges}
              name={"email"}
              placeholder={"Login"}
            />
          </Input>
          <div>
            <div>
              <Inputs
                border={"none"}
                onChange={onChanges}
                name={"password"}
                password="password"
                placeholder={"Password"}
              />
            </div>
            <RemFor>
              <Checkbox onChange={onChange}>Remember me</Checkbox>
              <Forgot onClick={() => navigate("/register")}>
                Registration
              </Forgot>
            </RemFor>
          </div>
          <Buttons
            txt={"Login"}
            width={520}
            onClick={onSubmit}
            background={"#0061DF"}
            color={"white"}
          />
        </Wrapper>
      </Container>
    </>
  );
};

export default SignIn;
