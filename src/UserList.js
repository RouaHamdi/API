import React, { useState, useEffect } from 'react';
import axios from 'axios' ;

const [listOfUsers, setListOfUsers] = useState([]);
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setListOfUsers(response.data))
        .catch(error => console.log(error));
}, []);
const users = listOfUsers.map((user) => (
    <li key={user.id}>{user.name}</li>
));
return (
    <div>
        <h1>List of Users</h1>
        <ul>{users}</ul>
    </div>
);