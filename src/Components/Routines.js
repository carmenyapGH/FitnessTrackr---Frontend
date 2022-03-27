import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../api";
import { fetchRoutines } from "../api";

const Routines = ({
  posts,
  setPosts,
  setUserdata,
  userdata,
  setToken,
  token,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  return (
    <>
      <h2>Routines</h2>
    </>
  );
};

export default Routines;
