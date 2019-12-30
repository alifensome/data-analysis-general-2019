const fs = require("fs");
const DataLine = require("./dataLine");
const Results = require("./results");
const headerLine = `ons_id,ons_region_id,constituency_name,county_name,region_name,country_name,constituency_type,party_name,party_abbreviation,firstname,surname,gender,sitting_mp,former_mp,votes,share,change`

const analyse = async () => {
  const csvData = await readFile();
  const lines = csvData.split("\n");
  const dataRows = [];
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (!line || line == headerLine){
      continue;
    }
    const dl = new DataLine();
    dl.setFromCSV(line);
    dataRows.push(dl);
  }
  const results = new Results(dataRows);
  results.setResults();
  results.setSeats()
  console.log(results.seats)

  const results2 = new Results(dataRows);
  results2.setResults();
  results2.addVotesToLab("Liberal Democrat")
  results2.setSeats()
  console.log(results2.seats)

  const results3 = new Results(dataRows);
  results3.setResults();
  results3.addVotesToLab("Green")
  results3.addVotesToLab("Liberal Democrat")
  results3.setSeats()
  console.log(results3.seats)
};

const readFile = async () => {
  return new Promise((resolve, reject) => {
    return fs.readFile(
      "HoC-GE2019-results-by-candidate.csv",
      "utf8"
      , (err, file) => {
        if (err) {
          return reject(err)
        }
        return resolve(file)
      });
  })
}

analyse().catch(console.log);
