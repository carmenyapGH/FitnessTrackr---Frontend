import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchRoutines, userInfo, deleteRoutines } from "../api";

const Routines = ({
  routines,
  setRoutines,
  userdata,
  setUserdata,
  token,
  setToken,
  singleRoutine,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleDelete = async (id, token) => {
    try {
      const response = await deleteRoutines(id, token);
      if (response.success) {
        fetchRoutines().then((routines) => {
          setRoutines(routines);
        });
        history("/routines");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdate = (post_id) => {
    history(`/update/${post_id}`);
  };

  return (
    <>
      <div className="routines-hdr">
        {routines &&
          routines.map((routine) => {
            const { id, name, goal, creatorName, activities } = routine;
            return (
              <div className="routines-detail" key={id}>
                <h3>{name} </h3>
                <h4> {goal}</h4>
                <p>
                  <span className="creatorName"></span>
                  {creatorName}
                </p>
                <ul>
                  {activities.map(({ id, name, duration, count }) => {
                    return (
                      <li key={id}>
                        <span> {name} </span>
                        <span className="tab">( {duration} mins </span>
                        <span> {count} reps) </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Routines;
