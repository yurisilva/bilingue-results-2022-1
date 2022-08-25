import ResultsTable from "./components/ResultsTable/ResultsTable";
import { exampleDataFourTeams } from "./testData";
import React from "react";

const App = () => {
  return <ResultsTable data={exampleDataFourTeams} />;
};

export default App;
