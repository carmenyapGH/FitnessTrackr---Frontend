import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRoutines, fetchMyRoutines, fetchRoutines } from "../api";

const Add = ({
  userdata,
  setUserdata,
  setRoutines,
  myroutines,
  setMyroutines,
}) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setisPublic] = useState(false);
  const history = useNavigate();
  const handleSubmit = async (event) => {
    console, event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");

    try {
      const response = await addRoutines(
        localSourcedToken,
        name,
        goal,
        isPublic
      );

      fetchMyRoutines(userdata.username).then((myroutines) => {
        setMyroutines(myroutines);
      });
      fetchRoutines().then((routines) => {
        setRoutines(routines);
      });
      setName("");
      setGoal("");
      setisPublic(false);
      history("/myroutines");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-grp">
          <label>Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter routine name .."
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="add-form-grp">
          <label>Goal</label>
          <textarea
            type="text"
            value={goal}
            row="5"
            placeholder="Enter goal.."
            onChange={(event) => setGoal(event.target.value)}
          />
        </div>

        <div className="add-form-grp">
          <div className="add-form-grp-cbox">
            <input
              type="checkbox"
              value={isPublic}
              onChange={(event) => setisPublic(event.target.checked)}
            />

            <span>Public?</span>
          </div>
        </div>

        <button type="submit">Create New Routine</button>
      </form>
    </div>
  );
};

export default Add;
