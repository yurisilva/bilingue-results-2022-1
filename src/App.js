import ResultsTable from "./components/ResultsTable/ResultsTable";
import { exampleDataFourTeams } from "./testData";
import React from "react";

const App = () => {
  return (
    <>
      <h1>Bilingual challenge - 2022 (1st semester)</h1>
      <h2>Results</h2>
      <ResultsTable data={exampleDataFourTeams} />
    </>
  );
};

export default App;
