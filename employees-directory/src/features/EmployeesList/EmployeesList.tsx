import React, { useState, useEffect } from "react";
import { fetchDataUsers } from "../../gateway/gateway";
import { useNavigate } from "react-router-dom";
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

interface EmployeesListProps {
  filterPosition: string;
  searchQuery: string;
}

const EmployeesList: React.FC<EmployeesListProps> = ({ filterPosition, searchQuery }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data: User[] = await fetchDataUsers();
        setUsers(data);
      } catch (error) {
        console.log('Error data received', error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    let updatedUsers = users;

    // Фильтрация по должности
    if (filterPosition !== 'Все') {
      updatedUsers = updatedUsers.filter((user: User) =>
        user.position.toLowerCase() === filterPosition.toLowerCase()
      );
    }

    // Фильтрация по строке поиска
    if (searchQuery.trim() !== '') {
      const query = searchQuery.trim().toLowerCase();
      updatedUsers = updatedUsers.filter((user: User) => {
        return (
          user.name.toLowerCase().includes(query) ||
          user.tag.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      });
    }

    setFilteredUsers(updatedUsers);
  }, [users, filterPosition, searchQuery]);

  const handleItemClick = (id: string) => {
    navigate(`/employees/${id}`);
  };

  return (
    <div className="main">
      {filteredUsers.length === 0 ? (
        <div className="search-error">
          <img
            src="../../icons/left-pointing-magnifying-glass_1f50d.png"
            alt="search-img"
          />
          <div className="search-titles">
            <h2>Мы никого не нашли</h2>
            <span>Попробуй скорректировать запрос</span>
          </div>
        </div>
      ) : (
        <ul className="employee-list">
          {filteredUsers.map((user: User) => (
            <li
              className="employee-item"
              key={user.id}
              onClick={() => handleItemClick(user.id)}
            >
              <div className="employee-content">
                <div className="employee-photocontainer">
                  <img
                    src={user.avatar}
                    alt="employee photo"
                    className="employee-photo"
                  />
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
      )}
    </div>
  );
};

export default EmployeesList;
