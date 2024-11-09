import { useEffect, useState } from "react";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('users.json')
        .then(response => response.json())
        .then(data => setUsers(data))


    },[])


    return (
        <div>
            <h2>Incomplete</h2>
            <div className="user-container">
            {
            users.map(user => <User to do
             key={user.id} 
             user={user}></User>)
           }
            </div>
        </div>
    );
};

export default Users;