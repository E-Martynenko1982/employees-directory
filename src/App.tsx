import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from "./redux/store";
import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile/EmployeesProfile";
import Error from "./features/Error";
import useNetworkStatus from "./hooks/useNetworkStatus";

import Modal from "./features/Navigation/components/Modal/Modal";
import { fetchEmployees } from "./redux/employeesSlice";
import "./app.scss";

export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector((state: RootState) => state.modal.isOpen);
  const employeesLoaded = useSelector((state: RootState) => state.employees.loaded);

  useNetworkStatus();

  useEffect(() => {
    if (!employeesLoaded) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employeesLoaded]);

  return (
    <Router>
      <AppWithRoutes isModalOpen={isModalOpen} />
    </Router>
  );
};

const AppWithRoutes: React.FC<{ isModalOpen: boolean }> = ({ isModalOpen }) => {
  const location = useLocation();

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

export default App;
