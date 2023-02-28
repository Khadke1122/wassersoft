import React from 'react'
import { Link } from "react-router-dom";
import { FiUser } from 'react-icons/fi';
import { BsSliders} from 'react-icons/bs';
import { IoLogoWordpress } from "react-icons/io";

const Navbar = () => {
  // navbar section 
  return (
    <div className="navbar">
      {/* logo and name  */}
      <div className="logo-name">
        <div className="outer">
        <IoLogoWordpress size="25"/>
        </div>
        {/* title of organization  */}
        <p>WASSERSTOFF</p>
      </div>
      <div className="search-navlist">
        <div className="search-box">
          {/* search box  */}
          <input type="search" name="search" id="search" />
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>
        {/* unordered list  */}
        <ul className="navlist">
          <li>
            <Link to="/">Statistics</Link>
          </li>
          <li>
            <Link to="/Overview">Overview</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/dashboard">Analytics</Link>
          </li>
          {/* <div style={{height:"100px"}}>   </div> */}
        
       
          <li>  <h3 className="fi"><FiUser style={{height:"30px",width:"30px",color:"#FFFFFF"}} /> </h3></li>
          <li>  <h3 className="bs"><BsSliders style={{height:"30px",width:"30px",color:"#FFFFFF"}} /> </h3></li>
          <li>  <h3 className="bs"><BsSliders style={{height:"30px",width:"30px",color:"#FFFFFF"}} /> </h3></li>

        </ul>
        <h3 className="fi"><FiUser style={{height:"30px",width:"30px"}} /> </h3>
        <h3 className="bs"><BsSliders style={{height:"30px",width:"30px"}} /> </h3>
      </div>
      {/* users profile  */}
      <div className="profile-option">
        <span>
          <i className="fa-solid fa-user"></i>
        </span>
        <span>
          <i className="fa-solid fa-list"></i>
        </span>
      </div>
    </div>
  );
}

export default Navbar
