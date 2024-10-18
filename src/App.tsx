import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { useAppSelector } from './hooks/hooks';
import Modal from "./features/Navigation/components/Modal/Modal";
import "./app.scss";

const App: React.FC = () => {
  useNetworkStatus();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  return (
    <Router>
      <div className={`page ${isModalOpen ? 'page--modal-open' : ''}`}>
        <Navigation />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees/:id" element={<EmployeesProfile />} />
        </Routes>
      </div>
      {isModalOpen && <Modal />}
    </Router>
  );
}

export default App;
