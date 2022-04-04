import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, userInfo } from "../api";

const Login = ({ setToken, setUserdata }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      const info = await login(username, password);
      if (info.error) {
        return setError(info.error);
      }

      setToken(info.token);
      localStorage.setItem("token", info.token);
      const infoU = await userInfo(info.token);
      setUserdata(infoU.data);
      setUsername("");
      setPassword("");
      history("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="login-form-grp">
          <label>Name</label>
          <input
            required
            type="text"
            placeholder="Enter username.."
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <div className="login-form-grp">
          <label>Password</label>
          <input
            required
            type="text"
            placeholder="Enter password.."
            type="password"
            minLength="8"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button>Log In</button>
      </form>
      <p>{error} </p>
    </>
  );
};

export default Login;
