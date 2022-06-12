import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "./Navbar";
import swal from "sweetalert";
import PostContext from "./context/ProductContext";

const Login = () => {
  //   const navigate = useNavigate;
  const context = useContext(PostContext);
  const { host } = context;
  const [credentials, setcredentials] = useState({
    username: "",
    password: "",
  });
  const handleonchange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setcredentials({ ...credentials, [name]: value });
  };

  const loginUser = async () => {
    try {
      const response = await fetch(`${host}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...credentials }),
      });
      const data = await response.json();
      if (!data.error) {
        console.log(data);
        // localStorage.setItem("token")
      } else {
        console.log("error authenticating");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!credentials.username || !credentials.password) {
      alert("Please enter all the required fields!");
      return;
    }

    loginUser();
  };
  const alertmsg = () => {
    // alert(
    //   "Application is in development phase, please try to login using admin admin as a username and password"
    // );
    swal({
      title: "Oops!",
      text: "Application is in Development Phase!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Hola! Username: admin, Password: admin", {
          icon: "success",
        });
      } else {
        swal("Hola! Username: user, Password: user");
      }
    });
  };
  return (
    <>
      <Navbar />
      <div className="Login">
        <h1>Sign In</h1>
        <form onClick={handleSubmit} className="loginform">
          <label htmlFor="">Username :</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleonchange}
            placeholder="Enter Your username"
          />
          <label htmlFor="">Password :</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleonchange}
            placeholder="Enter your password"
          />
          <Link to="/products">
            <button type="submit" className="login">
              Login
            </button>
          </Link>
        </form>

        <span>
          <p className="usernew">New User?</p>
          <button onClick={alertmsg} className="register">
            Register
          </button>
        </span>
      </div>
    </>
  );
};

export default Login;
