import React, { useEffect } from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import Navigation from "./features/Navigation";
import EmployeesList from "./features/EmployeesList";
import EmployeesProfile from "./features/EmployeeProfile";
import Error from "./features/Error";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { fetchEmployees } from "./redux/employeesSlice";
import type { RootState, AppDispatch } from "./redux/store";
import "./app.scss";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const employeesLoaded = useSelector((state: RootState) => state.employees.data);
  const location = useLocation();

  const isOnline = useNetworkStatus();

  useEffect(() => {
    if (isOnline && (!employeesLoaded || employeesLoaded.length === 0)) {
      dispatch(fetchEmployees());
    }
  }, [dispatch, employeesLoaded, isOnline]);

  const knownRoutes = ['/', '/employees/:id'];
  const isUnknownRoute = !knownRoutes.some((path) => matchPath(path, location.pathname));

  return (
    <div className="page">
      {!isUnknownRoute && <Navigation />}
      <Routes>
        <Route path="/" element={<EmployeesList />} />
        <Route path="/employees/:id" element={<EmployeesProfile />} />
        <Route path="*" element={<Error type="general" />} />
      </Routes>
    </div>
  );
};

export default App;


