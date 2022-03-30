import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateRoutines, fetchRoutines } from "../api";

const Update = ({ setRoutines, singleRoutine, setUserdata, userdata }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState("");
  const history = useNavigate();
  const params = useParams();
  const routineId = params.id;
  console.log("params", params);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");
    console.log(isPublic);

    const response = await updateRoutines(
      localSourcedToken,
      name,
      goal,
      isPublic,
      routineId
    );

    if (response.success) {
      // fetchRoutines().then((routines) => {
      //   setRoutines(routines);
      // });
      history("/routines");
    }
  };

  const checkboxToggle = () => {
    document.getElementById("controlledCheckbox").checked = isPublic;
  };

  // useEffect(() => {
  //   // checkboxToggle();
  // }, [isPublic]);

  return (
    <div>
      <p>{singleRoutine.name} </p>
    </div>
  );
};

export default Update;
