import { Link } from "react-router-dom";const HomePage = () => {
   const data = [
      { id: 1, name: "Introduction" },
      { id: 2, name: "Acknowledgements" },
      { id: 3, name: "Types and components of computer systems" },
      { id: 4, name: "Input and output devices" },
      { id: 5, name: "Storage devices and media" },
      { id: 6, name: "Computer networks" },
      { id: 7, name: "Data types" },
      { id: 8, name: "The effects of using ICT" },
      { id: 9, name: "How ICT is used in everyday life" },
      { id: 10, name: "Work-related ICT applications and their effects" },
      { id: 11, name: "Systems analysis and design" },
      { id: 12, name: "Answers to self assesment questions" },
   ];

   return (
      <div>
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
         <Link className="link-button" to={`/unit/9`}>
            Module 7.1
         </Link>
         <Link className="link-button" to={`/unit/10`}>
            Module 7.2
         </Link>
         <Link className="link-button" to={`/unit/11`}>
            Module 8
         </Link>
         {/* ))} */}

         <p id="homepage">
            Completely Cambridge - Cambridge resources for Cambridge
            qualifications Cambridge University Press works closely with
            University of Cambridge International Examinations (CIE) as parts of
            the University of Cambridge. We enable thousands of students to pass
            their CIE exams by providing comprehensive, high-quality, endorsed
            resources. To find out more about University of Cambridge
            International Examinations visit www.cie.org.uk To find out more
            about Cambridge University Press visit www.cambridge.org/cie
         </p>

         <p id="homepage">
            CAMBRIDGE UNIVERSITY PRESS <br /> Cambridge, New York, Melbourne,
            Madrid, Cape Town, <br />
            Singapore, São Paulo, Delhi, Tokyo, Mexico City <br />
            <br /> Cambridge University Press <br />
            The Edinburgh Building, Cambridge CB2 8RU, UK <br />
            <br />
            www.cambridge.org <br /> Information on this title:
            www.cambridge.org/9780521179119 <br />
            <br />© Cambridge University Press 2010
            <br />
            <br /> This publication is in copyright. Subject to statutory
            exception and to the provisions of relevant collective licensing
            agreements, no reproduction of any part may take place without the
            written permission of Cambridge University Press.
            <br />
            <br /> First published 2010 3rd printing 2011
            <br />
            <br /> Printed in the United Kingdom at the University Press,
            Cambridge <br />
            <br />A catalogue record for this publication is available from the
            British Library <br />
            <br />
            ISBN 978-0-521-17911-9 Paperback with CD-ROM for Windows® and Mac®*{" "}
            <br />
            <br />
            Cover image: Computer key. Return or enter key on a computer
            keyboard.
            <br /> Adam Gault / Science Photo Library <br />
            <br />
            Cambridge University Press has no responsibility for the persistence
            or accuracy of URLs for external or third-party internet websites
            referred to in this publication, and does not guarantee that any
            content on such websites is, or will remain, accurate or
            appropriate. Information regarding prices, travel timetables and
            other factual information given in this work is correct at the time
            of first printing but Cambridge University Press does not guarantee
            the accuracy of such information thereafter. <br />
            <br />
            NOTICE TO TEACHERS <br />
            The photocopy masters in this publication may be photocopied or
            distributed electronically free of charge for classroom use within
            the school or institute which purchases the publication. Worksheets
            and copies of them remain in the copyright or cambridge University
            Press and such copies may not be distributed or used in any way
            outside the purchasing instutiation.
         </p>
      </div>
   );
};

export default HomePage;
