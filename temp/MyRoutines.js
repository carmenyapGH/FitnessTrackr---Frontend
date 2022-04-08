import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../api";
import { fetchMyRoutines } from "../api";

const MyRoutines = ({ setToken, token, setUserdata, userdata }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();
  const [myroutine, setMyroutine] = useState("");
  console.log("userdata", userdata);

  useEffect(async () => {
    try {
      const myRtns = await fetchMyRoutines(userdata.username);
      console.log("myRtrns ", myRtns);
      setMyroutine(myRtns);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="activities-form">
        {myroutine &&
          myroutine.map(({ id, name, activities }) => {
            return (
              <div key={id}>
                <h3>{name} </h3>
                <ul>
                  {activities.map(({ id, name }) => {
                    return <li key={id}> {name}</li>;
                  })}
                </ul>
              </div>
            );
          })}
        {console.log(myroutine)}
      </div>
    </>
  );
};

export default MyRoutines;
