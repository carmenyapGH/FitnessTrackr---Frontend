import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRoutineActivities, fetchMyRoutines, fetchRoutines } from "../api";

const AddRoutineActivities = ({
  setUserdata,
  userdata,
  setRoutines,
  singleRoutine,
  setSingleRoutine,
  activities,
  setActivities,
  setMyroutines,
}) => {
  const [name, setName] = useState(singleRoutine.name);
  const [goal, setGoal] = useState(singleRoutine.goal);

  // const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const history = useNavigate();
  const [activity, setActivity] = useState(0);
  const { id } = singleRoutine;

  let handleSelect = (e) => {
    setActivity(parseInt(e.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");
    try {
      const response = await addRoutineActivities(
        localSourcedToken,
        id,
        activity,
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
      <form className="addRoutineActivities-form" onSubmit={handleSubmit}>
        <br />

        <h3> Routine: {name} </h3>
        <h4> Goal: {goal} </h4>

        <label>Select an activity:</label>
        <select
          className="addRoutineActivities-form-grp"
          onChange={handleSelect}
        >
          <option value="select an option"> Please choose an option</option>
          {activities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
        </select>

        <div className="addRoutineActivities-form-grp">
          <label>mins</label>
          <input
            type="number"
            value={count}
            min="0"
            placeholder="Enter count.."
            onChange={(event) => setCount(event.target.value)}
          />
        </div>

        <div className="addRoutineActivities-form-grp">
          <label>reps</label>
          <input
            type="number"
            value={duration}
            min="0"
            placeholder="Enter duration.."
            onChange={(event) => setDuration(event.target.value)}
          />
        </div>

        <button type="submit">Create New Activity</button>
      </form>
    </div>
  );
};

export default AddRoutineActivities;
