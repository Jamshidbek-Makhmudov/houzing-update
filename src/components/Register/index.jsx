import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Forgot } from './style';
import {Buttons, Inputs} from "./../Generic"
// import { Checkbox } from 'antd';
import { Container, Input, Sign, Wrapper } from './style';
import { message } from 'antd';
import useRequest from '../../hooks/useRequest';
const Register = () => {
    const navigate = useNavigate()
    const [body, setBody] = useState({});
  const request = useRequest();

    const [errors, setError] = useState(false);
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
      const warning = () => {
        message.warning(`Something went wrong !! ${errors}`);
      };
      const onSubmit = async () => {
        try{
    
          request({ me: true, url: `/public/auth/register`, method: "POST", body }).then(
            (res) => {
                console.log(res, "resni malumoti");
              if (res?.success===true) {
                navigate(`/my-property`);
                info();
              }else{
                warning()
              }
            }
            );
          }catch (error){
            warning()
          }
      };
  return (
    <>
    <Container>
        <Wrapper>
        <Sign>Registration</Sign>
        <Input>
            <Inputs onChange={onChanges}
              name={"email"} border placeholder={"Login"}/>
        </Input>
        <Input>
            <Inputs onChange={onChanges}
              name={"firstname"} border placeholder={"First name"}/>
        </Input>
        <Input>
            <Inputs onChange={onChanges}
              name={"lastname"} border placeholder={"Last name"}/>
        </Input>
        <Input>
            <Inputs onChange={onChanges}
              name={"email"} border placeholder={"Email"}/>
        </Input>
        <Input>
            <Inputs border defaultValue={"dont write if you are only client"}  placeholder={"User role"}/>
        </Input>
        <Input>
            <Inputs onChange={onChanges}
              name={"password"} border password={"password"} placeholder={"Password"}/>
        </Input>
        <Input>
            <Inputs onChange={onChanges}
              name={"password"} border password={"password"} placeholder={"Re-enter password"}/>
        </Input>
        <div>
        <Forgot onClick={()=>navigate('/signin')}>
                    Already have account
                </Forgot>
        </div>
        <Buttons txt={"Register"} onClick={onSubmit} width={520} background={"#0061DF"} color={"white"}/>
        </Wrapper>
    </Container>
    </>
  )
}

export default Register