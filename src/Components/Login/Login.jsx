import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../../images/login.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Styles/login.scss";
import Joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export default function Login() {
  const [loading, setLoading] = useState(false);
  const [validationErr, setValidationErr] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  // showHide Password
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  //loginInfo
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // getFormValues
  function getFormData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  }
  // submitForm
  async function submitData(e) {
    e.preventDefault();
    let validationResult = validateForm();
    if (validationResult.error) {
      setValidationErr(validationResult.error.details);
      // console.log(validationResult.error.details)
    } else  {
      const { data } = await axios
        .post("https://route-movies-api.vercel.app/signin", user);
        if ( data.message ==='success' ) {
         
          redirectToHome();
        } else {
          setErrorMsg( data.message );
        }
        console.log(data);
    
    }
  }
  // redirectToHome
  const history = useHistory();
  function redirectToHome() {
    let path = "/home";
    history.push(path);
  }
  // validation
  function validateForm() {
    const schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } })
        .messages({
          "string.base": `"email" should be a type of 'email'`,
          "any.required": `"email" is a required field`,
        }),

      password: Joi.string()
        .required()
        .min(8)
        .pattern(new RegExp("^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z]"))
        .messages({
          "string.base": `"password" should be a type of 'password'`,
          "string.empty": `"password" cannot be an empty field`,
          "string.min": `"password" should be min 8 letters`,
          "string.pattern.base": `"password" should have at least one lower,upper letters and at least one digit`,
          "any.required": `"password" is a required field`,
        }),
    });
    return schema.validate(user, { abortEarly: false });
  }
  return (
    <>
      <div className="pt-5 registerDiv">
        <div className=" container pt-5 regContainer">
          <div className="row loginRow py-5 flex-column-reverse  flex-md-row regRow">
            <div className="col-md-6  py-2 loginLeftSide px-4">
              <h2 className="welcomeTxt">Welcome Back</h2>
              {/* errorMsg */}
              {errorMsg ? (
                <div className="alert alert-danger p-2 regerrorMsg">
                  {errorMsg}

                </div>
              ) : (
                ""
              )}
              {validationErr.map((error, index) => (
                <div key={index} className="alert alert-danger p-2 regerrorMsg">
                  {error.message}
                </div>
              ))}
              <form
                onSubmit={submitData}
                className="row pt-2 g-3 w-75 loginForm"
              >
                <div className="col-md-12 py-2">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label loginLabel"
                  >
                    E-mail
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type="email"
                    name="email"
                    className="form-control "
                    id="inputEmail4"
                  ></input>
                </div>
                <div className="col-md-12 py-2 position-relative">
                  <label
                    htmlFor="inputPassword4"
                    className="form-label loginPass loginLabel"
                  >
                    Password
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type={passwordType}
                    name="password"
                    className="form-control "
                    id="inputPassword4"
                  ></input>
                  <button
                    type="button"
                    className="btn border-none eyeBtn"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <AiOutlineEyeInvisible size={15}  style={{ color: "darkmagenta" }}/>
                    ) : (
                      <AiOutlineEye  size={15}  style={{ color: "darkmagenta" }}/>
                    )}
                  </button>
                </div>
                <div className="col-md-12 pt-1 remember d-flex justify-content-between">
                  <div className="col-6">
                    <div className="form-check rememberMe">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      ></input>
                      <label
                        className="form-check-label loginCheck"
                        htmlFor="gridCheck"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <Link
                      style={{ textDecoration: "none", color: "darkmagenta" }}
                      className="loginForgetPass"
                      to="forgetPassword"
                    >
                      Forget Password
                    </Link>
                  </div>
                </div>

                <div className="col-md-12 py-3">
                  <button
                    type="submit"
                    className="btn w-100 text-white loginBtn"
                  >
                    {/* loading */}
                    {loading ? (
                      <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
                {/* <div className="col-md-12">
                  <button 
                  type="submit" className="btn w-100 guestBtn">
                    continue as a guest
                  </button>
                </div>
                <div className="col-md-12 pt-4">
                  <h2 className="creatTxt fs-3">
                    Not registered yet?{" "}
                    <Link
                      style={{ textDecoration: "none", color: "darkmagenta" }}
                      to="register"
                    >
                      create An account
                    </Link>
                  </h2>
                </div> */}
              </form>
              <div className="col-md-12 btn  guestBtn">
              <Link
                      style={{ textDecoration: "none",color: "darkmagenta"}}
                      to="home"
                    >
                     continue as a guest
                    </Link>
              
                </div>
                <div className="col-md-12 pt-4">
                  <h2 className="creatTxt fs-3">
                    Not registered yet?{" "}
                    <Link
                      style={{ textDecoration: "none", color: "darkmagenta" }}
                      to="register"
                    >
                      create An account
                    </Link>
                  </h2>
                </div>
            </div>
            

            <div className="col-md-6  loginImgContainer">
              <img src={login} alt="" className="img-fluid login_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
