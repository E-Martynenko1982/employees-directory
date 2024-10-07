import Navigation from "./features/Navigation/Navigation";
import EmployeesList from "./features/EmployeesList/EmployeesList.tsx";

function App() {
  return (
    <div className="page">
      <Navigation />
      <EmployeesList />
    </div>
  )
}

export default App
