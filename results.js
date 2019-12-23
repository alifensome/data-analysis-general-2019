const Constituency = require("./constituency");
class Results {
  constructor(dataRows) {
    this.data = dataRows;
    this.constituencies = [];
  }
  setResults() {
    for (let index = 0; index < this.data.length; index++) {
      const d = this.data[index];
      const constituency = new Constituency(d.ons_id);
      constituency.setCandidates(this.data);
      constituency.findWinner();
      this.constituencies.push(constituency);
    }
  }
}

module.exports = Results;
