import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddRoutines, fetchRoutines } from "../api";

const Add = ({ setRoutines }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setisPublic] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (event) => {
    console, event.preventDefault();
    const localSourcedToken = localStorage.getItem("token");
    const response = await AddRoutines(localSourcedToken, name, goal, isPublic);
    console.log("Add==>", response);

    if (response.success) {
      setName("");
      setGoal("");
      setisPublic(false);
      fetchRoutines().then((routines) => {
        setRoutines(routines);
      });
      history("/routines");
    }
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <div className="add-form-grp">
          <label>name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter routine name .."
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="add-form-grp">
          <label>goal</label>
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
