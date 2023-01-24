import React, { useState } from "react";
import { Link } from "react-router-dom";
import Joi from "joi";
import register from "../../images/reg.jpg";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./Styles/register.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useHistory } from 'react-router-dom';
export default function Register() {
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
  // registerInfo
  const [user, setUser] = useState({
    email: "",
    password: "",
    fName: "",
    LName:"",
    age: ""
  });
  // getFormValues
  function getFormData(e) {
    const myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };
  // submitUserData
async function submitData(e){
  e.preventDefault();
    let validationResult = validateForm();
    if (validationResult.error) {
      setValidationErr(validationResult.error.details);
      // console.log(validationResult.error.details)
    } else  {
      const { data } = await axios
        .post("https://route-movies-api.vercel.app/signup", user);
        if ( data.message ==='success' ) {
         
          redirectToHome();
        } else {
          setErrorMsg( data.message );
        }
        console.log(data);
    
    }
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
        LName: Joi.required(),
      fName: Joi.required(),
      age:Joi.required()
    });
    return schema.validate(user, { abortEarly: false });
  }

  // redirectToLogin
  const history = useHistory();
  function redirectToLogin() {
    let path = "/login";
    history.push(path);
  }

  function redirectToHome(){
    let path="/home";
    history.push(path);
  }
  return (
    <>
      <div className="pt-5 registerDiv">
        <div className="container pt-5 regContainer">
          <div className="row py-5 flex-column-reverse  flex-md-row regRow">
            <div className="col-md-7 px-5 pt-3 pb-5 signUpLeftSide">
              <h2 className="createAccTxt fs-2">Create Account</h2>
              <h2 className="haveAccTxt fs-4">
                Already have account?
                <Link
                  onClick={redirectToLogin}
                  to="/login"
                  className="fs-3"
                  style={{ textDecoration: "none", color: "darkmagenta" }}
                >
                  Login
                </Link>
              </h2>
              <div className="or d-flex align-items-center justify-content-between w-75">
                <div className="br"></div>
                <h2 className="f-18 px-3">or</h2>
                <div className="br "></div>
              </div>
              {/* errorMsg */}
              {errorMsg ? (
                <div className="alert alert-danger p-2 regerrorMsg">
                  {errorMsg}

                </div>
              ) : (
                ""
              )}
              {validationErr.map((error, index) => (
                <div key={index} className="alert alert-danger p-2 regerrorMsg ">
                  {error.message}
                </div>
              ))}
              <form onSubmit={submitData} className="row g-3 w-75 regisForm">
              <div className="col-md-6 ">
                  <label
                    htmlFor="fristname"
                    className="form-label signUpLabels"
                  >
                    Frist Name
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type="text"
                    className="form-control"
                    name="fName"
                    id="fristname"
                    placeholder="FristName"
                    required
                  ></input>
                </div>
                <div className="col-md-6 ">
                  <label
                    htmlFor="lastname"
                    className="form-label signUpLabels"
                  >
                    Last Name
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type="text"
                    className="form-control"
                    name="LName"
                    id="lastname"
                    placeholder="LastName"
                    required
                  ></input>
                </div>
                <div className="col-md-12 ">
                  <label
                    htmlFor="inputEmail4"
                    className="form-label signUpLabels"
                  >
                    E-mail
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type="email"
                    className="form-control"
                    name="email"
                    id="inputEmail4"
                    placeholder="mail@website.com"
                    required
                  ></input>
                </div>
                <div className="col-md-12  position-relative">
                  <label
                    htmlFor="inputPassword4"
                    className="form-label signUpLabels"
                  >
                    Password
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    name="password"
                    type={passwordType}
                    className="form-control"
                    id="inputPassword4"
                    placeholder="min 8 character"
                    required
                  ></input>

                  <button
                    type="button"
                    className="btn border-none eyeBtn"
                    onClick={togglePassword}
                  >
                    {passwordType === "password" ? (
                      <AiOutlineEyeInvisible
                        size={15}
                        style={{ color: "darkmagenta" }}
                      />
                    ) : (
                      <AiOutlineEye
                        size={15}
                        style={{ color: "darkmagenta" }}
                      />
                    )}
                  </button>
                </div>

                <div className="col-md-12">
                  <label
                    htmlFor="inputNumber"
                    className="form-label signUpLabels"
                  >
                    Age
                  </label>
                  <span style={{ color: "darkmagenta" }} className="px-1">
                    *
                  </span>
                  <input
                    onChange={getFormData}
                    type="number"
                    name="age"
                    className="form-control"
                    id="inputage"
                    required
                  ></input>
                </div>
             

                <div className="col-md-12 py-3">
                  <button
                    type="submit"
                    className="btn  w-100 text-white signUpBtn"
                  >
                    {/* loading */}
                    {loading ? (
                      <i className="fa fa-spinner fa-spin"></i>
                    ) : (
                      "Sign up"
                    )}
                  </button>
                </div>
                
              </form>
              <div className="col-md-12 btn  guestBtn">
              <Link
                      style={{ textDecoration: "none",color: "darkmagenta"}}
                      to="home"
                    >
                     continue as a guest
                    </Link>
              
                </div>
            </div>
            <div className="col-md-5  imgContainer">
              <img
                src={register}
                alt="register"
                className="img-fluid signUp_img "
                style={{ marginTop: "5rem" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
