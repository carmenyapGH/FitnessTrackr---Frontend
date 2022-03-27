import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { activities, userInfo } from "../api";

const Activities = ({ setToken, setUserdata }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  return (
    <>
      <h2>activities</h2>
    </>
  );
};

export default Activities;
