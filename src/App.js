import './App.css';
import React from 'react'
import users from "./data/users-data";

class App extends React.Component {


  render() {
    const userData = users
    const userList = userData.map((user, i) => {
      return (
        <div key={i}>
          <h1>{user.name}</h1>
          <p>{user.location}</p>
          <p>{user.car}</p>
        </div>
      )
    })

    return (
      <div className="App">
        <div className="page-deets">
          <h2>Loop Over an Array of Data</h2>
        </div>
        <div className="users">
          {userList}
        </div>
      </div>
    );
  }
}

export default App;
