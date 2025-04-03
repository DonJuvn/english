import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div id="nav">
         {/* <div className="container"> */}
         <div className="nav">
            <div className="logo">
               <Link to={`/`}>
                  <img src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Logo" />
               </Link>
            </div>
            <div className="author">by Gulnur Sagimbayeva</div>
         </div>
         {/* </div> */}
         <div className="units">
            <h1 className="title">
               Cambridge IGCSE <span>ICT Coursebook</span>
            </h1>
            <h1 className="subtitle">
               Chris Leadbetter and Stewart Wainwright
            </h1>
            {/* {data.map((unit) => ( */}
            {/* <Link to={`/unit/${unit.id}`}>{unit.name}</Link> */}
            <Link className="link-button" to={`/unit/1`}>
               Introduction
            </Link>
            <Link className="link-button" to={`/unit/2`}>
               Module 1
            </Link>
            <Link className="link-button" to={`/unit/3`}>
               Module 2
            </Link>
            <Link className="link-button" to={`/unit/4`}>
               Module 3
            </Link>
            <Link className="link-button" to={`/unit/5`}>
               Module 4
            </Link>
            <Link className="link-button" to={`/unit/6`}>
               Module 5
            </Link>
            <Link className="link-button" to={`/unit/7`}>
               Module 6
            </Link>
            <Link className="link-button" to={`/unit/8`}>
               Module 7
            </Link>
            {/* <Link className="link-button" to={`/unit/9`}>
               Module 7.1
            </Link>
            <Link className="link-button" to={`/unit/10`}>
               Module 7.2
            </Link> */}
            <Link className="link-button" to={`/unit/11`}>
               Module 8
            </Link>
         </div>
      </div>
   );
};

export default Header;
