import {useNavigate} from "react-router";

import "./login.css";
import {useState} from "react";

export default function Login() {
  const USERNAME = "user";
  const PASSWORD = "1234"

  const navigate = useNavigate();

  const [submitted, setSubmitted] = useState(false);
  const [isUsernameOrPasswordInvalid, setIsUsernameOrPasswordInvalid] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (sessionStorage.getItem("isLoggedIn")! === "true") {
    location.href = "/";
  }

  function handleLogin() {
    setSubmitted(true);

    if (username == null || username !== USERNAME || password == null || password !== PASSWORD) {
      setIsUsernameOrPasswordInvalid(true);
    } else {
      setIsUsernameOrPasswordInvalid(false);
    }

    if ((username != null && username === USERNAME) && (password != null && password === PASSWORD)) {
      sessionStorage.setItem("isLoggedIn", "true");
      navigate("/");
      setSubmitted(false);
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-app-title">Sample Vite App</h3>
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {submitted && isUsernameOrPasswordInvalid ? <span style={{fontSize: 10, color: 'red'}}>Invalid username or password</span> : null}
          <div className="d-grid gap-2 mt-3">
            <button onClick={handleLogin} type="button" className="btn btn-primary">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}