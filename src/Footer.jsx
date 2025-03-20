import React from "react";
const Footer = () => {
   return (
      <div className="footer">
         <div className="units">
            <div id="nav">
               <div className="container">
                  <div className="nav">
                     <div className="logo">
                        <img
                           src={`${process.env.PUBLIC_URL}/logo.svg`}
                           alt="Logo"
                        />
                     </div>
                     <p id="copyright">
                        Copyright © 2025 Gulnur Sagymbaeva <br /> All rights
                        reserved. No part of this book may be reproduced,
                        <br />
                        stored, or shared
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
