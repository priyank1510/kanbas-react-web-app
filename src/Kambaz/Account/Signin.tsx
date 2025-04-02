import { Link } from "react-router-dom";

import { setCurrentUser } from "./reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as client from "./client";
export default function Signin() {
  const[credentials,setCredentials] = useState<any>({});
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
      const user =  await client.signin(credentials);
  
    try {if(!user) return alert("invalid credentials");
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");}
    catch (err:any) {
      console.error(err);
    }
  };

  return (
    <div id="wd-signin-screen" >
      <h3>Sign in</h3>
      <input onChange={(e)=>setCredentials({...credentials,username: e.target.value})} id="wd-username" placeholder="username" className="form-control mb-2" /> <br />
      <input onChange={(e)=>setCredentials({...credentials,password: e.target.value})} placeholder="password" type="password" className="form-control mb-2" /> <br />
      {/* <Link  to="/Kambaz/Dashboard" id="wd-signin-btn" className="btn btn-primary w-100"> Sign in </Link> <br /> */}
      <Button variant="primary" onClick={signin}> Sign In</Button>
      <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>
    </div>
);}
