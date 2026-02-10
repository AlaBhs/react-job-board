import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';

const JobPage = () => {
  const { id } = useParams(); // get job ID from route
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (err) {
        console.error('Error fetching job:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!job) {
    return <p className="text-center py-10">Job not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
      <div className="text-gray-600 mb-2">{job.type}</div>
      <div className="flex items-center mb-4 text-orange-700">
        <FaMapMarkerAlt className="mr-1" /> {job.location}
      </div>
      <p className="mb-4">{job.description}</p>
      <h3 className="text-indigo-500 font-bold mb-4">{job.salary} / Year</h3>

      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">{job.company.name}</h2>
        <p className="mb-2">{job.company.description}</p>
        <p>Email: <a href={`mailto:${job.company.contactEmail}`} className="text-indigo-500">{job.company.contactEmail}</a></p>
        <p>Phone: {job.company.contactPhone}</p>
      </div>

      <Link
        to="/jobs"
        className="inline-block mt-6 bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600"
      >
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobPage;
