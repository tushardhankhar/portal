import React from "react";

export default function JobCard({ jobDetails }) {
  const date = new Date(jobDetails?.time * 1000).toLocaleString();

  return (
    <div className="border p-4 rounded-lg">
      <h2 className="text-xl font-semibold text-white">{jobDetails?.title}</h2>
      <div>
        <h3 className="text-lg font-medium text-white">
          By : {jobDetails?.by} {date}
        </h3>
      </div>
    </div>
  );
}
