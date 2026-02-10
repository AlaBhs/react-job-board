import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const JobListing = ({ job }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDesc = () => setShowFullDesc(!showFullDesc);

  const shortDesc =
    job.description.length > 100
      ? job.description.slice(0, 100) + "..."
      : job.description;

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{job.type}</div>
          <h3 className="text-xl font-bold">{job.title}</h3>
        </div>

        <div className="mb-5">
          {showFullDesc ? job.description : shortDesc}
          {job.description.length > 100 && (
            <button
              onClick={toggleDesc}
              className="ml-2 text-indigo-500 underline"
            >
              {showFullDesc ? "Show Less" : "Read More"}
            </button>
          )}
        </div>

        <h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="text-orange-700 flex items-center">
          <FaMapMarkerAlt className="mr-1" /> {job.location}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
