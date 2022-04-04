import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  deleteRoutineActivities,
  fetchMyRoutines,
  fetchRoutines,
} from "../api";

const DeleteRoutineActivities = ({
  myroutines,
  setMyroutines,
  userdata,
  setUserdata,
  setRoutines,
  singleRoutine,
}) => {
  const [routineActivityId, setRoutineActivityId] = useState(0);
  const [activity, setActivity] = useState(0);
  const params = useParams();
  const routineId = params.id;
  const { name, goal } = singleRoutine;
  const history = useNavigate();

  let handleSelect = (e) => {
    setRoutineActivityId(parseInt(e.target.value));
  };

  const handleSubmit = async (event) => {
    console, event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");
    try {
      const response = await deleteRoutineActivities(
        localSourcedToken,
        routineActivityId
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
        <form className="deleteRoutineActivities-form" onSubmit={handleSubmit}>
          <br />

          <h3> Routine: {name} </h3>
          <h4> Goal: {goal} </h4>

          <label>Select an routine activity:</label>
          <select
            className="deleteRoutineActivities-form-grp"
            onChange={handleSelect}
          >
            <option value="select an option">Please choose an option</option>
            {Object.values(singleRoutine.activities).map((activity) => (
              <option
                key={activity.routineActivityId}
                value={activity.routineActivityId}
              >
                {activity.name}
              </option>
            ))}
          </select>

          <button className="deleteButton" type="submit">
            Delete Routine Activity
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default DeleteRoutineActivities;
