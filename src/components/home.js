import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div  style={{ width: "100%", height: "100%" }}>
      <Link to="/login">log in</Link>
      <Link to="/users/new">sign up</Link>
    </div>
  );
};
export default Home;
