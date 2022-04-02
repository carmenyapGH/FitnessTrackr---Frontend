import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register, userInfo } from "../api";

const Register = (props) => {
  const setToken = props.setToken;
  const setUserdata = props.setUserdata;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    if (password !== confirm) {
      setError("Confirm password does not match!");
      return;
    }

    const info = await register(username, password);

    if (info.error) {
      return setError(info.error.message);
    } else {
      history.push("/");
    }

    setToken(info.token);
    localStorage.setItem("token", info.data.token);

    setUsername("");
    setPassword("");
    setConfirm("");
    history("/");
  };

  return (
    <>
      <h2> Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="register-form-grp">
          <label>Name</label>
          <input
            required
            type="text"
            placeholder="Enter username.."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="register-form-grp">
          <label>Password</label>
          <input
            required
            type="password"
            minLength="8"
            placeholder="Enter password.."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="register-form-grp">
          <label>Confirm Password</label>
          <input
            required
            type="password"
            minLength="8"
            placeholder="Confirm password.."
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>

        <button type="submit">Register</button>
      </form>
      <p>{error} </p>
    </>
  );
};

export default Register;
