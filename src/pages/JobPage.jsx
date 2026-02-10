import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const JobPage = ({ deleteJob }) => {
  const job = useLoaderData();
  const navigate = useNavigate();

const handleDelete = async () => {
  const confirmDelete = window.confirm('Are you sure you want to delete this job?');
  if (!confirmDelete) return;

  try {
    await deleteJob(job.id);
    toast.success('Job deleted successfully');
    navigate('/jobs');
  } catch (err) {
    toast.error('Failed to delete job', err.message);
  }
};

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">{job.type}</p>

        <p className="mb-4">{job.description}</p>

        <p className="text-indigo-500 font-bold mb-4">{job.salary}</p>

        <p className="text-orange-700 mb-6">{job.location}</p>

        <div className="flex gap-3">
          <Link
            to={`/jobs/edit/${job.id}`}
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
          >
            Edit Job
          </Link>

          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete Job
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPage;
