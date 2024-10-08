import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList.tsx";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile.tsx";

function App() {
  const [filterPosition, setFilterPosition] = useState<string>('Все');
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <Router>
      <div className="page">
        <Navigation
          onFilterChange={setFilterPosition}
          onSearchChange={setSearchQuery}

        />
        <Routes>
          <Route path="/" element={<EmployeesList filterPosition={filterPosition} searchQuery={searchQuery} />} />
          <Route path="/employees/:id" element={<EmployeesProfile />} />
        </Routes>

      </div>
    </Router>

  )
}

export default App
