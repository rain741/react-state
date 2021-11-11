import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let handleChangeUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };
  let handleChangePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleChangeUsername}
        name="username"
        placeholder="User Name"
      ></input>
      <input
        type="password"
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
      ></input>
      <button onClick={() => console.log(username, password)}>Login</button>
    </div>
  );
}
export default Login;
