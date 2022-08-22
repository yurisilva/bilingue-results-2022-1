import "./styles/App.css";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { exampleDataTwoTeams } from "./testData";
import React from "react";

const App = () => {
  return <ResultsTable data={exampleDataTwoTeams} />;
};

export default App;
