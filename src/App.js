import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fetchRoutines, userInfo } from "./api";
import {
  Navbar,
  Home,
  Routines,
  MyRoutines,
  Activities,
  Login,
  Register,
} from "./Components";

function App() {
  const [token, setToken] = useState("");
  const [userdata, setUserdata] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchUser();
    fetchRoutines().then((posts) => {
      setPosts(posts);
    });
  }, []);

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
              posts={posts}
              setPosts={setPosts}
              setUserdata={setUserdata}
              userdata={userdata}
              token={token}
              setToken={setToken}
            />
          }
        />
        <Route
          exact
          path="/myroutines"
          element={
            <MyRoutines
              posts={posts}
              setPosts={setPosts}
              setUserdata={setUserdata}
              userdata={userdata}
              token={token}
              setToken={setToken}
            />
          }
        />

        <Route
          exact
          path="/activities"
          element={
            <Activities
              posts={posts}
              setPosts={setPosts}
              setUserdata={setUserdata}
              userdata={userdata}
              token={token}
              setToken={setToken}
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
