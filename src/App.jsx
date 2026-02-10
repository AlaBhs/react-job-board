import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        title="Level Up Your React Career"
        subtitle="Browse jobs, apply fast, and grow as a React developer"
      />
      <HomeCards />
      <JobListings />
    </>
  );
}

export default App;
