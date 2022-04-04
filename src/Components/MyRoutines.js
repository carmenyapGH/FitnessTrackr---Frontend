import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../api";
import { fetchMyRoutines, fetchRoutines, deleteRoutines } from "../api";

const MyRoutines = ({
  token,
  setRoutines,
  userdata,
  setSingleRoutine,
  myroutines,
  myroutineActivity,
  setMyroutines,
  setSingleActivity,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  useEffect(async () => {
    try {
      const myRtns = await fetchMyRoutines(userdata.username);

      setMyroutines(myRtns);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleDelete = async (id, token) => {
    try {
      const response = await deleteRoutines(id, token);
      if (response.success) {
        fetchMyRoutines(userdata.username).then((myRtns) => {
          setMyroutines(myRtns);
        });
        fetchRoutines().then((routines) => {
          setRoutines(routines);
        });
        history("/myroutines");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      {userdata && (
        <div>
          <Link className="addmyroutine" to="/add">
            ADD ROUTINES
          </Link>
        </div>
      )}
      <div className="myroutines-hdr">
        {myroutines.map((myroutine) => {
          const { id, name, goal, creatorName, activities } = myroutine;

          return (
            <div className="myroutines-detail" key={id}>
              <h3>{name} </h3>
              <h4> {goal}</h4>

              <ul className="myroutine-list">
                {activities.map((myroutineActivity) => {
                  const {
                    id,
                    name,
                    duration,
                    count,
                    routineActivityId,
                    description,
                  } = myroutineActivity;

                  return (
                    <li key={routineActivityId}>
                      <span> {name} </span>
                      <span className="tab"> ({duration} mins</span>
                      <span> {count} reps) </span>
                    </li>
                  );
                })}
              </ul>

              <div className="clickbtns">
                <div>
                  <button
                    className="updatebtn"
                    onClick={() => {
                      setSingleRoutine(myroutine);
                      history(`/update/${id}`);
                    }}
                  >
                    Update Routine
                  </button>
                </div>

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
                    className="addRoutineActivitiesbtn"
                    onClick={() => {
                      setSingleRoutine(myroutine);
                      history(`/addRoutineActivities/${id}`);
                    }}
                  >
                    Add Activities
                  </button>
                </div>

                <div>
                  <button
                    className="updateRoutineActivitiesbtn"
                    onClick={() => {
                      setSingleActivity(myroutineActivity);
                      setSingleRoutine(myroutine);
                      history(`/updateRoutineActivities/${id}`);
                    }}
                  >
                    Update Activities
                  </button>
                </div>

                <div>
                  <button
                    className="deleteRoutineActivitiesbtn"
                    onClick={() => {
                      setSingleActivity(myroutineActivity);
                      setSingleRoutine(myroutine);
                      history(`/deleteRoutineActivities/${id}`);
                    }}
                  >
                    Delete Activities
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MyRoutines;
