import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Job Search state
  const [searchForm, setSearchForm] = useState({
    skills: "",
    experience: "",
    location: ""
  });
  const [searchResults, setSearchResults] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  // JD Compare state
  const [compareForm, setCompareForm] = useState({
    skills: "",
    jdText: ""
  });
  const [compareResult, setCompareResult] = useState(null);

  return (
    <AppContext.Provider
      value={{
        searchForm,
        setSearchForm,
        searchResults,
        setSearchResults,
        compareForm,
        setCompareForm,
        compareResult,
        setCompareResult,
        savedJobs,
        setSavedJobs
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
