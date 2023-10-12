import React, { useState } from 'react';
import "../Styles/Register.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
            await axios.post("http://localhost:4001/api/register",{username,email,password})
            navigate("/login")
            alert("Registration completed! Now LOgin...")
            


    }catch(err){
        console.error(err)

    }

      
    }


  return (
    <div>
      
      <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample"/>
      </div>
      
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
      <h1>Register Your Account</h1>
      <br/>
      
        <form onSubmit={handleSubmit}>

        <div className="form-outline mb-4">
        <label className="form-label" htmlFor="username" > Name</label>
            <input type="text"  className="form-control form-control-lg"
              placeholder="Enter a your name" name='username'  value={username} onChange={(event) => setUsername(event.target.value)} />
            
          </div>

        

        
          <div className="form-outline mb-4">
          <label className="form-label" htmlFor="email">Email address</label>
            <input type="email"  className="form-control form-control-lg"
              placeholder="Enter a valid email address" name='email'  value={email} onChange={(event) => setEmail(event.target.value)}  />
            
          </div>

      
          <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">Password</label>
            <input type="password" className="form-control form-control-lg"
              placeholder="Enter password" name='password'  value={password} onChange={(event) => setPassword(event.target.value)} />
     
          </div>

         
          <div className="text-center text-lg-start mt-4 pt-2">
            <button type="submit" className="btn btn-primary btn-lg"
              style={{paddingLeft: "2.5rem",paddingRight: "2.5rem"}}>Register</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have An Account Please <a href="/login"
                className="link-danger"> Login</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </div>
  )
}

export default Register
