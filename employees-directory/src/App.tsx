import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import "./app.scss";

function App() {
  const [filterPosition, setFilterPosition] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<string>('alphabetical');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Router>
      <div className={`page ${isModalOpen ? 'page--modal-open' : ''}`}>
        <Navigation
          onFilterChange={setFilterPosition}
          onSearchChange={setSearchQuery}
          onSortOrderChange={setSortOrder}
          sortOrder={sortOrder}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <EmployeesList
                filterPosition={filterPosition}
                searchQuery={searchQuery}
                sortOrder={sortOrder}
              />
            }
          />
          <Route path="/employees/:id" element={<EmployeesProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
