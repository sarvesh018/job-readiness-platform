import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobSearch from "./pages/JobSearch";
import JDCompare from "./pages/JDCompare";
import SavedJobs from "./pages/SavedJobs";
import MyProfile from "./pages/MyProfile";
import { useEffect } from "react";
import { getSavedJobs } from "./services/jobService";
import { useAppContext } from "./context/AppContext";


function App() {
  const { setSavedJobs } = useAppContext();

  useEffect(() => {
    const loadSavedJobs = async () => {
      const jobs = await getSavedJobs();
      setSavedJobs(jobs);
    };

    loadSavedJobs();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/compare" element={<JDCompare />} />
        <Route path="/saved" element={<SavedJobs />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
