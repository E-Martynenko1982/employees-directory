import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import Error from "./features/Error";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import Modal from "./features/Navigation/components/Modal/Modal";
import { fetchEmployees } from "./redux/employeesSlice";
import "./app.scss";

const AppContent: React.FC = () => {
  const location = useLocation();
  const isModalOpen = useAppSelector((state) => state.modal.isOpen);
  const employeesLoaded = useAppSelector(state => state.employees.loaded);
  const dispatch = useAppDispatch();

  useNetworkStatus();

  useEffect(() => {
    if (!employeesLoaded) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employeesLoaded]);

  const knownRoutes = ['/', '/employees/:id'];
  const isUnknownRoute = !knownRoutes.some((path) => matchPath(path, location.pathname));

  return (
    <div className={`page ${isModalOpen ? 'page--modal-open' : ''}`}>
      {!isUnknownRoute && <Navigation />}
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/employees/:id" element={<EmployeesProfile />} />
        <Route path="*" element={<Error type={"general"} />} />
      </Routes>
      {isModalOpen && <Modal />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
