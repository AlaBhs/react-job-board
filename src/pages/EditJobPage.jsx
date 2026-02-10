import { useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJobSubmit }) => {
  const navigate = useNavigate();
  const loadedJob = useLoaderData();

  const [job, setJob] = useState({
    ...loadedJob,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setJob((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setJob((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateJobSubmit(job);
      toast.success("Job updated successfully");
      navigate(`/jobs/${job.id}`);
    } catch (err) {
      toast.error("Failed to update job", err.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Job</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ===== Job Info ===== */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Job Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Job Title</label>
              <input
                type="text"
                name="title"
                value={job.title}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Job Type</label>
              <select
                name="type"
                value={job.type}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Remote</option>
                <option>Contract</option>
              </select>
            </div>

            <div>
              <label className="block font-medium mb-1">Location</label>
              <input
                type="text"
                name="location"
                value={job.location}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">Salary Range</label>
              <select
                name="salary"
                value={job.salary}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select salary</option>
                <option>$50K - $60K</option>
                <option>$60K - $70K</option>
                <option>$70K - $80K</option>
                <option>$80K - $90K</option>
                <option>$90K+</option>
              </select>
            </div>
          </div>

          <div className="mt-4">
            <label className="block font-medium mb-1">Job Description</label>
            <textarea
              name="description"
              value={job.description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>

        {/* ===== Company Info ===== */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Company Information</h2>

          <div className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Company Name</label>
              <input
                type="text"
                name="company.name"
                value={job.company.name}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Company Description
              </label>
              <textarea
                name="company.description"
                value={job.company.description}
                onChange={handleChange}
                rows="3"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium mb-1">Contact Email</label>
                <input
                  type="email"
                  name="company.contactEmail"
                  value={job.company.contactEmail}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Contact Phone</label>
                <input
                  type="text"
                  name="company.contactPhone"
                  value={job.company.contactPhone}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ===== Submit ===== */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Update Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditJobPage;
