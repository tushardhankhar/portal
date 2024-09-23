import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import axios from "axios";

export default function JobBoard() {
  const [jobIds, setJobIds] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [jobDetails, setJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  async function getJobIds(params) {
    try {
      const res = await axios.get(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      setJobIds(res?.data)
      return res?.data?.slice(quantity, quantity + 5);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function getJobDetails() {
    const jobIds = await getJobIds();
    setIsLoading(true);
    try {
      const jobsForPage = await Promise.all(
        jobIds.map((jobId) =>
          fetch(
            `https://hacker-news.firebaseio.com/v0/item/${jobId}.json`
          ).then((res) => res.json())
        )
      );
      setJobDetails(jobsForPage);
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getJobDetails();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div className="flex justify-center  w-full min-h-screen items-center flex-col gap-6">
      { isLoading ? <>Loading.....</> : jobDetails.map((jobDetails) => {
        return <JobCard jobDetails={jobDetails} />;
      })}
      {jobIds.length - quantity < 5 ? (
        <></>
      ) : (
        <button
          onClick={() => setQuantity(quantity + 5)}
          className="border-none p-4 bg-orange-400 text-white text-lg font-medium"
        >
          Load more Jobs
        </button>
      )}
    </div>
  );
}
