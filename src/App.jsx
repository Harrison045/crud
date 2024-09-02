import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import {v4 as uuid} from 'uuid'

function App() {
  // cretae userState
  const [user, setUser] = useState([
    { name: "harrison", email: "harison@email.com", id: uuid() },
    { name: "frank", email: "frank@email.com", id: uuid() },
  ]);

  const addNewUser = (newUser) => {
    setUser([...user, newUser]);
  };
  console.log(user);

  return (
    <>
      <div className="grid-cols-2">
        <UserList user={user} />
        <UserForm addUser={addNewUser} />
      </div>
    </>
  );
}

export default App;
