import { message } from "antd";
// import { useNavigate } from "react-router-dom";
const { REACT_APP_BASE_URL } = process.env;

export const useRequest = () => {
    // const navigate = useNavigate()
    const warning=()=>{
      message.warning('Something went wrong')
    }

  const request = async({me, url, method = "GET", body = {}, token, headers = {},}) => {
    if(method === 'post')headers['Content-Type']='application/json'
    if(token) headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    const options={
      method,
      headers: { ...headers, 'Content-Type': 'application/json'},
      body: JSON.stringify(body
      //   {
      //   // vaqtincha shu malumotla orqali login qilinadi keinroq body qoyib ketiladi "iwladi"
      //   // temporary data in order to know is login works or not, later insted use body 
      //   email: "xasanabdurazakov_100@mail.ru",
      //   password: "Ss20010806"
      // }
      )
    }

    try{
      let res = await fetch(`${me?'https://houzing-app.herokuapp.com/api':REACT_APP_BASE_URL}${url}`, options).then((res)=>res.json())
      return res
    } catch (error){
      // warning(error.status)
      message.warning('Something went wrong')
      console.log(error.status, "bu error rrequest");
      return warning(error)
    }
  };
  return request;
};

export default useRequest;
