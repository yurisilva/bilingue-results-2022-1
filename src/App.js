import ResultsTable from "./components/ResultsTable/ResultsTable";
import React, { useEffect, useState } from "react";
import { getFormattedGroups } from "./services/gateway";

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
      <h1>Bilingual challenge - 2022 (1st semester)</h1>
      <h2>Results</h2>
      <ResultsTable data={data} />
    </>
  );
};

export default App;
