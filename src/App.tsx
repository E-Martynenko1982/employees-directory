import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import Error from "./features/Error";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Modal from "./features/Navigation/components/Modal/Modal";
import { useEffect } from "react";
import { fetchEmployees } from "./redux/employeesSlice";

import "./app.scss";

const App: React.FC = () => {
  useNetworkStatus();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const employeesLoaded = useAppSelector(state => state.employees.loaded);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!employeesLoaded) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employeesLoaded]);

  return (
    <Router>
      <div className={`page ${isModalOpen ? 'page--modal-open' : ''}`}>
        <Navigation />
        <Routes>
          <Route path="/" element={<EmployeesList />} />
          <Route path="/employees/:id" element={<EmployeesProfile />} />
          <Route path="*" element={<Error type={"general"} />} />
        </Routes>
      </div>
      {isModalOpen && <Modal />}
    </Router>
  )
}

export default App;

