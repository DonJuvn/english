import { useParams } from "react-router-dom";
const Unit10 = () => {
   const { id } = useParams();

   return (
      <div>
         <h1>Unit Page</h1>
         <p>Displaying content for unit ID: {id}</p>
      </div>
   );
};

export default Unit10;
