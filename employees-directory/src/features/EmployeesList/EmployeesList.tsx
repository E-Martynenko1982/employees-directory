import React, { useState, useEffect } from 'react';
import { fetchDataUsers, User } from '../../gateway/gateway';
import { useNavigate } from 'react-router-dom';
import { getDayOfYear } from '../../utils/utils';
import "./index.scss";

interface EmployeesListProps {
  filterPosition: string;
  searchQuery: string;
  sortOrder: string;
}

const EmployeesList: React.FC<EmployeesListProps> = ({
  filterPosition,
  searchQuery,
  sortOrder,
}) => {
  const [employees, setEmployees] = useState<User[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data: User[] = await fetchDataUsers();
        setEmployees(data);
      } catch (error) {
        console.error('Ошибка при загрузке сотрудников:', error);
      }
    };
    getUsers();
  }, []);

  useEffect(() => {
    let updatedEmployees = [...employees];


    if (filterPosition !== 'Все') {
      updatedEmployees = updatedEmployees.filter((user: User) =>
        user.position.toLowerCase() === filterPosition.toLowerCase()
      );
    }


    if (searchQuery.trim() !== '') {
      const query = searchQuery.trim().toLowerCase();
      updatedEmployees = updatedEmployees.filter((user: User) => {
        return (
          user.name.toLowerCase().includes(query) ||
          user.tag?.toLowerCase().includes(query) ||
          user.email.toLowerCase().includes(query)
        );
      });
    }


    updatedEmployees = updatedEmployees.sort((a, b) => {
      if (sortOrder === 'alphabetical') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'birthday') {
        const aBirthday = new Date(a.birthDate);
        const bBirthday = new Date(b.birthDate);

        const aDayOfYear = getDayOfYear(aBirthday);
        const bDayOfYear = getDayOfYear(bBirthday);

        return aDayOfYear - bDayOfYear;
      } else {
        return 0;
      }
    });

    setFilteredEmployees(updatedEmployees);
  }, [employees, filterPosition, searchQuery, sortOrder]);

  const handleItemClick = (id: string) => {
    navigate(`/employees/${id}`);
  };

  return (
    <div className="main">
      {filteredEmployees.length === 0 ? (
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
          {filteredEmployees.map((user: User) => (
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

