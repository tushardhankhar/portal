import React, { useState } from "react";
import EmployeeDetail from "./EmployeeDetail";
import { EMPLOYEE_DATA } from "./EmployeeData";
import Modal from "../Modal/Modal";
import EmployeeForm from "./EmployeeForm";

export default function EmployeeDatabase() {
  const [selected, setSelected] = useState({});
  const [employeeList, setEmployeeList] = useState(EMPLOYEE_DATA);
  const [isOpen, setIsOpen] = useState(false);

  function handleSelected(id) {
    setSelected(employeeList.find((emp) => emp.id === id));
  }

  function handleAddEmployee(data) {
    setEmployeeList([
      ...employeeList,
      {
        ...data,
        id: Math.random(),
      },
    ]);
    setIsOpen(false);
  }

  function handleDelete(id) {
    const filteredList = employeeList.filter((emp) => {
      return emp.id !== id;
    });
    setEmployeeList(filteredList);
    setSelected({});
  }
  return (
    <div className="w-full min-h-screen  flex-col gap-6">
      <button
        className="dark:text-white border p-4 rounded-lg relative left-[90%] mt-4 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        Add Employee
      </button>
      <div className="flex w-full justify-between p-8">
        <div className="w-[30%] text-center font-semibold text-xl dark:text-white p-4 border border-black dark:border-white">
          <h2>Employee List</h2>
          <hr />
          {employeeList.map((emp) => {
            return (
              <div
                className="border m-2 p-2 flex justify-between cursor-pointer"
                onClick={() => handleSelected(emp.id)}
                key={emp.id}
              >
                {emp.firstName + " " + emp.lastName}{" "}
                <span
                  className="cursor-pointer mr-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(emp.id);
                  }}
                >
                  X
                </span>{" "}
              </div>
            );
          })}
        </div>
        <EmployeeDetail selected={selected} />
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EmployeeForm handleAddEmployee={handleAddEmployee} />
      </Modal>
    </div>
  );
}
