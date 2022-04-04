import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  updateRoutineActivities,
  fetchMyRoutines,
  fetchRoutines,
} from "../api";

const UpdateRoutineActivities = ({
  myroutines,
  setMyroutines,
  setUserdata,
  userdata,
  setRoutines,
  singleRoutine,
  setSingleRoutine,
  singleActivity,
  setSingleActivity,
}) => {
  const params = useParams();
  const routineId = params.id;
  const { name, goal } = singleRoutine;
  const [routineActivityId, setRoutineActivityId] = useState(0);
  const [activity, setActivity] = useState(0);
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const history = useNavigate();
  console.log("params", routineId);

  let handleSelect = (e) => {
    setRoutineActivityId(parseInt(e.target.value));
    console.log("e.target.value", routineActivityId);
  };

  const handleSubmit = async (event) => {
    console, event.preventDefault();
    // console.log("updateRoutineActivities", routineActivityId);
    // console.log("isNan-false is# ?", isNaN(routineActivityId));
    const localSourcedToken = localStorage.getItem("token");

    try {
      const response = await updateRoutineActivities(
        localSourcedToken,
        routineActivityId,
        count,
        duration
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
        <form className="updateRoutineActivities-form" onSubmit={handleSubmit}>
          <br />

          <h3> Routine: {name} </h3>
          <h4> Goal: {goal} </h4>

          <label>Select an routine activity:</label>
          <select
            className="updateRoutineActivities-form-grp"
            onChange={handleSelect}
          >
            <option value="select an option"> Please choose an option</option>
            {Object.values(singleRoutine.activities).map((activity) => (
              <option
                key={activity.routineActivityId}
                value={activity.routineActivityId}
              >
                {activity.name}
              </option>
            ))}
          </select>

          <div className="updateRoutineActivities-form-grp">
            <label>mins</label>
            <input
              type="number"
              value={duration}
              min="0"
              // placeholder="Enter count.."
              onChange={(event) => setDuration(event.target.value)}
            />
          </div>

          <div className="updateRoutineActivities-form-grp">
            <label>reps</label>
            <input
              type="number"
              value={count}
              min="0"
              // placeholder="Enter duration.."
              onChange={(event) => setCount(event.target.value)}
            />
          </div>

          <button type="submit">Update Routine Activity</button>
        </form>
      ) : null}
    </div>
  );
};

export default UpdateRoutineActivities;
