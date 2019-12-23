const fs = require("fs").promises;
const DataLine = require("./dataLine");
const Results = require("./results");

// console.log(csvData);
const analyse = async () => {
  const csvData = await fs.readFile(
    "HoC-GE2019-results-by-candidate.csv",
    "utf8"
  );
  const lines = csvData.split("\n");
  const dataRows = [];
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    const dl = new DataLine();
    dl.setFromCSV(line);
    dataRows.push(dl);
  }
  const results = new Results(dataRows);
  results.setResults();
  console.log(results.constituencies[2].winningCandidate);
};

analyse();
