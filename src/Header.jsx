import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div id="nav">
         {/* <div className="container"> */}
            <div className="nav">
               <div className="logo">
                  <Link to={`/`}>
                     <img
                        src={`${process.env.PUBLIC_URL}/logo.svg`}
                        alt="Logo"
                     />
                  </Link>
               </div>
               <div className="author">by Gulnur Sagimbayeva</div>
            </div>
         {/* </div> */}
      </div>
   );
};

export default Header;
