import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchRoutines, userInfo, deleteRoutines } from "../api";

const Routines = ({
  routines,
  setRoutines,
  setUserdata,
  userdata,
  setToken,
  token,
  singleRoutine,
  setSingleRoutine,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleDelete = async (id, token) => {
    const response = await deleteRoutines(id, token);
    if (response.success) {
      fetchRoutines().then((routines) => {
        setRoutines(routines);
      });
      history("/routines");
    }
  };

  const handleUpdate = (post_id) => {
    history(`/update/${post_id}`);
  };

  const displayActivities = routines.map((routines) =>
    routines.activities.map((x) => x.name)
  );

  console.log(" userdata", userdata);
  // console.log("map", displayActivities);
  return (
    <>
      <div>
        {userdata && (
          <Link className="addpost" to="/add">
            ADD ROUTINES
          </Link>
        )}
      </div>

      <div className="routines-detail">
        {routines &&
          routines.map((routine) => {
            const { id, name, goal, creatorName, activities } = routine;
            return (
              <div key={id}>
                <h3>{name} </h3>
                <h4> {goal}</h4>
                <p>
                  <span className="creatorName"></span>
                  {creatorName}
                </p>
                <ul>
                  {activities.map(({ id, name }) => {
                    return <li key={id}> {name} </li>;
                  })}
                </ul>

                {token && userdata.username === creatorName && (
                  <>
                    <div>
                      <button
                        className="deletebtn"
                        onClick={() => handleDelete(id, token)}
                      >
                        Delete Routine
                      </button>
                    </div>

                    <div>
                      <button
                        className="updatebtn"
                        onClick={() => {
                          setSingleRoutine(routine);
                          history(`/update/${id}`);
                        }}
                      >
                        Update Routine
                      </button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Routines;
