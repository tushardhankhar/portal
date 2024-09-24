import React from "react";

export default function EmployeeDetail({ selected }) {
  return (
    <div className="w-[70%] text-center font-semibold text-xl dark:text-white p-4 border border-black dark:border-white">
      Employee Information
      <hr />
      {selected?.id && (
        <div className="flex items-center flex-col mt-12">
          {selected?.image ? (
            <img className="h-44 w-44 rounded-full" src={selected.image} alt="" />
          ) : (
            <img
              className="h-44 w-44 "
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
              alt=""
            />
          )}

          <h2 className="text-2xl ">
            {selected.firstName + " " + selected.lastName}
          </h2>
          <h3>{selected.address}</h3>
          <h4>{selected.email}</h4>
          <h5>Mob - {selected.mobile}</h5>
          <h5>Dob -{selected.dob}</h5>
        </div>
      )}
    </div>
  );
}
