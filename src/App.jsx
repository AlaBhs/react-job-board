import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import AddJobPage from './pages/AddJobPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobPage />} />
          <Route path="add-job" element={<AddJobPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
