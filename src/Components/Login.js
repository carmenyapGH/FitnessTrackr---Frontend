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

    const info = await login(username, password);

    if (info.error) {
      return setError(info.error.message);
    }

    setToken(info.token);
    localStorage.setItem("token", info.token);
    const infoU = await userInfo(info.token);
    setUserdata(infoU.data);
    setUsername("");
    setPassword("");
    history("/");
  };

  return (
    <>
      <body className="login-body">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

          <div className="login-form-grp">
            <label></label>
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
            <label></label>
            <input
              required
              placeholder="Enter password.."
              type="password"
              minLength="8"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button className="login-button">Login</button>
        </form>
        <p>{error} </p>
      </body>
    </>
  );
};

export default Login;
