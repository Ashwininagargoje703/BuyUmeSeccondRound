import React from "react";
const AddEmployeesList = ({
  averageAge,
  addedEmployees,
  handleRemove,
  handleSort,
}) => {
  return (
    <>
      <div
        style={{
          border: "4px solid black",
          padding: "5px",
          width: "35%",
        }}
      >
        <h1>Team</h1>
        <button
          style={{
            backgroundColor: "pink",
            color: "white",
            border: "none",
            width: "100px",
            height: "29px",
            borderRadius: "30px",
          }}
          onClick={handleSort}
        >
          Sort by age
        </button>
        {addedEmployees.map((employee) => (
          <div
            key={employee.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "5px",
              marginBottom: "10px",
              padding: "15px",
              backgroundColor: "gray",
              marginTop: "10px",
            }}
          >
            <p>{employee.first_name}</p>
            <p>{employee.age}</p>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                width: "70px",
                height: "29px",
              }}
              onClick={() => handleRemove(employee.id)}
            >
              Remove
            </button>
          </div>
        ))}

        {addedEmployees.length > 0 && (
          <div>
            <h2>{`Avarage age ${averageAge()}`}</h2>
          </div>
        )}
      </div>
    </>
  );
};
export default AddEmployeesList;
