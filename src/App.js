import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useSyncExternalStore } from "react";

function App() {
  return (
    <div className="App">
      <h1>All Users</h1>

      <LoadUsers></LoadUsers>
    </div>
  );
}
function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="usersContainer">
      {users.map((user) => (
        // <li>name: {user.name}</li>
        <User
          id={user.id}
          name={user.name}
          username={user.username}
          email={user.email}
          street={user.address.street}
          city={user.address.city}
        ></User>
      ))}
    </div>
  );
}

function User(props) {
  return (
    <div className="userContainer">
      <h1>{props.name}</h1>
      <p>Id: {props.id}</p>
      <p>User Name: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Street: {props.street}</p>
      <p>City: {props.city}</p>
    </div>
  );
}
export default App;
