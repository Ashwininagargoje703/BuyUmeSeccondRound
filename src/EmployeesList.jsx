import React from "react";
import { employees } from "./employesData";
const EmployeesList = ({initialData, handleAdd}) => {
  return (
    <>
      <div
        style={{
          border: "4px solid black",
          padding: "5px",
          width: "35%",
        }}
      >
        <h1>Employees</h1>
        {initialData.map((employee) => (
          <div
          key={employee.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom:'10px',
              padding: "15px",
              backgroundColor:'gray',
             
            }}
          >
            <p>{employee.first_name}</p>
            <p>{employee.age}</p>
            {!employee.isAdded &&(
                <button
                style={{
                    backgroundColor:"blue",
                    color:"white",
                    border:"none",
                    width:'50px',
                    height:"29px",
                }}
                onClick={() => handleAdd(employee, employee.id)}
                >Add</button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};
export default EmployeesList;
