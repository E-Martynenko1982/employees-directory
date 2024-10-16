import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import useNetworkStatus from "./hooks/useNetworkStatus";
import "./app.scss";

const App: React.FC = () => {
  useNetworkStatus();

  return (
    <Router>
      <div className="page">
        <Navigation />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees/:id" element={<EmployeesProfile />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;