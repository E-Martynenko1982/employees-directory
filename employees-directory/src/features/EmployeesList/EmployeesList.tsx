import React, { useState, useEffect } from "react";
import { fetchDataUsers } from "../../gateway/gateway.js";
import "./index.scss";

interface User {
  avatar: string;
  birthDate: number;
  email: string;
  id: string;
  name: string;
  phone: string;
  position: string;
  tag: string;
}

const EmployeesList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchDataUsers();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log('Error data received', error);
      }
    };
    getUsers()
  }, [])

  return (
    <div className="main">
      <ul className="employee-list">
        {users.map((user) => (
          <li className="employee-item" key={user.id}>
            <div className="employee-content">
              <div className="employee-photocontainer">
                <img src={user.avatar} alt="employee photo" className="employee-photo" />
              </div>
              <div className="employee-info">
                <div className="employee-header">
                  <h2 className="employee-name">{user.name}</h2>
                  <span className="employee-tag">{user.tag}</span>
                </div>
                <p className="employee-role">{user.position}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeesList;
