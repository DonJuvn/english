import { useParams } from "react-router-dom";

const UnitPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Unit Page</h1>
      <p>Displaying content for unit ID: {id}</p>
    </div>
  );
};

export default UnitPage;
