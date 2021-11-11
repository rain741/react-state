import { useState } from "react";
function Login2() {
  const [user, setUser] = useState({ username: "", password: "" });
  const handleChangeUser = (event) => {
    const { name, value } = event.target;
    setUser((preUser) => ({ ...preUser, [name]: value }));
  };

  return (
    <div>
      <input
        type="text"
        value={user.username}
        onChange={handleChangeUser}
        name="username"
        placeholder="User Name"
      ></input>
      <input
        type="password"
        value={user.password}
        onChange={handleChangeUser}
        name="password"
        placeholder="Password"
      ></input>
      <button onClick={() => console.log(user.username, user.password)}>
        Login2
      </button>
    </div>
  );
}
export default Login2;
