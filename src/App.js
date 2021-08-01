import React , { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
function App() {
  const [usersList,setUsersList] = useState([]);
  const onAddUserHandler = (uName , uAge) => {
      setUsersList((prevUsersList) => {
            return [...prevUsersList , { name:uName , age:uAge , id:Math.random().toString() }];
      });
  }

  return (
    <div>
          <AddUser onAddUser={onAddUserHandler}/>
          <UserList users={usersList}/>
    </div>
  );
}

export default App;
