import { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
function Todo() {
  const [todos, setTodos] = useState(["belajar react ", "belajar state "]);
  const [inputTodo, setInputTodo] = useState("");
  const addTodo = () => {
    setTodos([...todos, inputTodo]);
  };
  const handleChanges = (event) => {
    setInputTodo(event.target.value);
  };
  console.log(inputTodo);

  const editTodo = (item) => {
    const inputPrompt = prompt();
    const ubahTodo = todos.map((todos, index) =>
      index == item ? inputPrompt : todos
    );
    setTodos(ubahTodo);
  };
  console.log(editTodo);

  return (
    <div className="Todo">
      <Container>
        <input
          type="text"
          placeholder="Tambahkan Data"
          onChange={handleChanges}
        />
        <Button variant="primary" onClick={addTodo}>
          Add
        </Button>

        <ul>
          {todos.map((item, index) => (
            <div>
              <h2>{item}</h2>

              <Row>
                <Col className="mr-3">
                  <Button
                    variant="danger"
                    onClick={() =>
                      setTodos(
                        todos.filter(
                          (item, filterIndex) => filterIndex !== index
                        )
                      )
                    }
                  >
                    {" "}
                    Delete
                  </Button>
                </Col>

                <Col className="me-3">
                  <Button variant="success" onClick={() => editTodo(index)}>
                    Edit
                  </Button>
                </Col>
              </Row>
            </div>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default Todo;
