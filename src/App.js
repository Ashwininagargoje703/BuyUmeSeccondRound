import logo from "./logo.svg";
import "./App.css";
import EmployeesList from "./EmployeesList";
import { useState } from "react";
import { employees } from "./employesData";
import AddEmployeesList from "./AddedEmployees";

function App() {
  const [initialData, SetInitialData] = useState(
    employees.map((item) => ({ ...item, isAdded: false }))
  );

  const [addedEmployees, SetAddedEmployees] = useState([]);

  const handleAdd = (employee, id) => {
    SetAddedEmployees((d) => [...d, employee]);

    const updated = initialData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isAdded: !item.isAdded,
        };
      } else {
        return item;
      }
    });
    SetInitialData((d) => [...updated]);
  };

  const handleRemove = (id) => {
    addedEmployees.forEach((employee, idx) => {
      if (employee.id === id) {
        addedEmployees.splice(idx, 1);
      }
    });

    SetAddedEmployees((d) => [...addedEmployees]);
    const updated = initialData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isAdded: !item.isAdded,
        };
      } else {
        return item;
      }
    });
    SetInitialData((d) => [...updated]);
  };

  const handleSort = () => {
    addedEmployees.sort((a, b) => 
      a.age - b.age);
      SetAddedEmployees((d)=>[...addedEmployees]);

    }
  
    const averageAge = () => {

      let sum = 0;
      addedEmployees.forEach((employee) =>{
        sum += employee.age
      });
      return(sum/addedEmployees.length).toFixed(2);
    }

  return (
    <>
      {" "}
      <h1>Employees Data</h1>
      <div
        className="App"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <EmployeesList initialData={initialData} handleAdd={handleAdd} />
        <AddEmployeesList
          addedEmployees={addedEmployees}
          handleRemove={handleRemove}
          handleSort={handleSort}
          averageAge={averageAge}
        />
      </div>
    </>
  );
}

export default App;
