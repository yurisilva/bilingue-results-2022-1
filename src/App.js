import ResultsTable from "./components/ResultsTable/ResultsTable";
import React, { useEffect, useState } from "react";
import { getFormattedGroups } from "./services/gateway";
import "./App.css";

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const request = async () => {
      return await getFormattedGroups();
    };

    request().then((d) => {
      setData(d);
    });
  }, []);

  return (
    <>
      <div className={"page-header"}>
        <h1>Bilingual challenge - 2022 (1st semester)</h1>
        <h2>Results</h2>
      </div>
      <ResultsTable data={data} />
    </>
  );
};

export default App;
