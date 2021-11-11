import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Component/Login";
import Login2 from "./Component/Login2";
import Todo from "./Component/Todo";

function App() {
  return (
    <div className="App">
      <Login />
      <br />
      <Login2 />
      <br />
      <Todo />
    </div>
  );
}

export default App;
