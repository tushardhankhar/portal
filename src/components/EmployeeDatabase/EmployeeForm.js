import React, { useState } from "react";

export default function EmployeeForm({ handleAddEmployee }) {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    image: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    handleAddEmployee(employee);
  }

  return (
    <div className="text-center">
      <h1>Add a new Employee</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="First Name"
            className="border p-1 rounded-md"
            value={employee.firstName}
            onChange={(e) =>
              setEmployee({
                ...employee,
                firstName: e.target.value,
              })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border p-1 rounded-md"
            value={employee.lastName}
            onChange={(e) =>
              setEmployee({
                ...employee,
                lastName: e.target.value,
              })
            }
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border p-1 rounded-md"
          value={employee.email}
          onChange={(e) =>
            setEmployee({
              ...employee,
              email: e.target.value,
            })
          }
        />{" "}
        <input
          type="text"
          placeholder="Image"
          className="border p-1 rounded-md"
          value={employee.image}
          onChange={(e) =>
            setEmployee({
              ...employee,
              image: e.target.value,
            })
          }
        />{" "}
        <input
          type="text"
          placeholder="Contact"
          className="border p-1 rounded-md"
          value={employee.mobile}
          onChange={(e) =>
            setEmployee({
              ...employee,
              mobile: e.target.value,
            })
          }
        />{" "}
        <input
          type="text"
          placeholder="Address"
          className="border p-1 rounded-md"
          value={employee.address}
          onChange={(e) =>
            setEmployee({
              ...employee,
              address: e.target.value,
            })
          }
        />{" "}
        <input
          type="date"
          className="border p-1 rounded-md"
          value={employee.dob}
          onChange={(e) =>
            setEmployee({
              ...employee,
              dob: e.target.value,
            })
          }
        />
        <button className="border p-1">Submit</button>
      </form>
    </div>
  );
}
