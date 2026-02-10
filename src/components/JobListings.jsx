import jobsData from '../data/jobs.json';

const JobListings = () => {
  const { jobs } = jobsData;

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md relative"
            >
              <div className="p-4">
                <div className="mb-6">
                  <div className="text-gray-600 my-2">{job.type}</div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                </div>

                <div className="mb-5">
                  {job.description}
                </div>

                <h3 className="text-indigo-500 mb-2">
                  {job.salary} / Year
                </h3>

                <div className="border border-gray-100 mb-5"></div>

                <div className="text-orange-700">
                  📍 {job.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobListings;
