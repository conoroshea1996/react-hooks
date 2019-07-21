import React, { useState } from "react";
import "./App.css";

import Table from "./components/table/table";

const App = () => {
  const userdata = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
    { id: 4, name: "Bob", username: "whocares" }
  ];

  const [users, setUsers] = useState(userdata);

  const addUsers = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    console.log(id);
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h1>with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h3>Add user</h3>
        </div>
        <div className="flex-large">
          <h3>View user</h3>
        </div>
      </div>
      <Table users={users} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
