import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { updateRoutines, fetchMyRoutines, fetchRoutines } from "../api";

const Update = ({
  singleRoutine,
  setSingleRoutine,
  setRoutines,
  userdata,
  setUserdata,
  myroutines,
  setMyroutines,
}) => {
  const [name, setName] = useState(singleRoutine.name);
  const [goal, setGoal] = useState(singleRoutine.goal);
  const [isPublic, setIsPublic] = useState(singleRoutine.isPublic);
  const history = useNavigate();
  const params = useParams();
  const routineId = params.id;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");
    try {
      const response = await updateRoutines(
        localSourcedToken,
        name,
        goal,
        isPublic,
        routineId
      );

      fetchMyRoutines(userdata.username).then((myroutines) => {
        setMyroutines(myroutines);
      });
      fetchRoutines().then((routines) => {
        setRoutines(routines);
      });

      history("/myroutines");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      {singleRoutine ? (
        <form key="id" onSubmit={handleSubmit} className="update-form">
          <div className="update-form-grp">
            <label>Routine Name</label>
            <input
              type="text"
              value={name}
              id="name_input"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="update-form-grp">
            <label>Goal</label>
            <input
              type="text"
              value={goal}
              id="goal_input"
              onChange={(event) => setGoal(event.target.value)}
            />
          </div>
          <div className="update-form-grp">
            <label>Public ?</label>
            <input
              type="checkbox"
              id="controlledCheckbox"
              checked={isPublic}
              onChange={(event) => setIsPublic(event.target.checked)}
            />
            <span>Public?</span>
          </div>
          <button type="submit">Update My Routine</button>
        </form>
      ) : null}
    </div>
  );
};

export default Update;
