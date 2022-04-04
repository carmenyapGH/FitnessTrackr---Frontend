import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  fetchRoutines,
  fetchMyRoutines,
  userInfo,
  fetchActivities,
  deleteRoutinesActivities,
} from "./api";
import {
  Navbar,
  Home,
  Routines,
  MyRoutines,
  Activities,
  Login,
  Register,
  Add,
  Update,
  AddRoutineActivities,
  UpdateRoutineActivities,
  DeleteRoutineActivities,
} from "./Components";

function App() {
  const [token, setToken] = useState("");
  const [userdata, setUserdata] = useState(null);
  const [routines, setRoutines] = useState([]);
  const [singleRoutine, setSingleRoutine] = useState({});
  const [singleActivity, setSingleActivity] = useState({});
  const [activities, setActivities] = useState("");
  const [myroutines, setMyroutines] = useState([]);
  const [myroutineActivity, setMyroutineActivity] = useState([]);

  useEffect(() => {
    fetchUser();
    console.log("userdata", userdata);

    try {
      fetchActivities().then((activities) => {
        setActivities(activities);
        console.log("App-fetchActivit", activities);
      });

      fetchRoutines().then((routines) => {
        setRoutines(routines);
      });
    } catch (error) {
      console.log(error);
    }
  }, [token]);

  const fetchUser = async () => {
    const IsToken = localStorage.getItem("token");
    if (IsToken) {
      setToken(IsToken);
      const infoU = await userInfo(IsToken);
      const id = infoU._id;
      setUserdata(infoU);
    }
  };

  return (
    <div className="App">
      <Navbar
        userdata={userdata}
        setToken={setToken}
        setUserdata={setUserdata}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home setUserdata={setUserdata} userdata={userdata} />}
        />
        <Route
          exact
          path="/routines"
          element={
            <Routines
              routines={routines}
              setRoutines={setRoutines}
              userdata={userdata}
              setUserdata={setUserdata}
              token={token}
              setToken={setToken}
              singleRoutine={singleRoutine}
            />
          }
        />

        <Route
          path="/add"
          element={
            <Add
              userdata={userdata}
              setUserdata={setUserdata}
              setRoutines={setRoutines}
              myroutines={myroutines}
              setMyroutines={setMyroutines}
            />
          }
        />

        <Route
          path="/update/:id"
          element={
            <Update
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
              setRoutines={setRoutines}
              userdata={userdata}
              setUserdata={setUserdata}
              myroutines={myroutines}
              setMyroutines={setMyroutines}
            />
          }
        />

        <Route
          path="/addRoutineActivities/:id"
          element={
            <AddRoutineActivities
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
              setRoutines={setRoutines}
              userdata={userdata}
              setUserdata={setUserdata}
              token={token}
              setToken={setToken}
              activities={activities}
              setActivities={setActivities}
              setMyroutines={setMyroutines}
              myroutines={myroutines}
            />
          }
        />

        <Route
          path="/deleteRoutineActivities/:id"
          element={
            <DeleteRoutineActivities
              singleRoutine={singleRoutine}
              setRoutines={setRoutines}
              userdata={userdata}
              token={token}
              setToken={setToken}
              activities={activities}
              setActivities={setActivities}
              setMyroutines={setMyroutines}
              myroutines={myroutines}
            />
          }
        />
        <Route
          path="/updateRoutineActivities/:id"
          element={
            <UpdateRoutineActivities
              singleRoutine={singleRoutine}
              setSingleRoutine={setSingleRoutine}
              singleActivity={singleActivity}
              setSingleActivity={setSingleActivity}
              userdata={userdata}
              setUserdata={setUserdata}
              activities={activities}
              setActivities={setActivities}
              myroutines={myroutines}
              setMyroutines={setMyroutines}
              setRoutines={setRoutines}
            />
          }
        />

        <Route
          exact
          path="/myroutines"
          element={
            <MyRoutines
              token={token}
              setRoutines={setRoutines}
              userdata={userdata}
              setSingleRoutine={setSingleRoutine}
              setSingleActivity={setSingleActivity}
              myroutines={myroutines}
              setMyroutines={setMyroutines}
            />
          }
        />

        <Route
          exact
          path="/activities"
          element={
            <Activities
              routines={routines}
              setRoutines={setRoutines}
              setUserdata={setUserdata}
              userdata={userdata}
              token={token}
              setToken={setToken}
              activities={activities}
              setActivities={setActivities}
            />
          }
        />

        <Route
          path="/register"
          element={
            <Register
              setToken={setToken}
              setUserdata={setUserdata}
              action="register"
            />
          }
        />

        <Route
          path="/login"
          element={
            <Login
              setToken={setToken}
              setUserdata={setUserdata}
              action="login"
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
