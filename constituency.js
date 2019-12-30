class Constituency {
  constructor(ons_id) {
    this.ons_id = ons_id;
    this.candidates = [];
  }
  setCandidates(dataRows) {
    for (let index = 0; index < dataRows.length; index++) {
      const d = dataRows[index];
      if (d.ons_id == this.ons_id) {
        this.candidates.push(d);
      }
    }
  }
  findWinner() {
    let winningVotes = 0;
    for (let index = 0; index < this.candidates.length; index++) {
      let c = this.candidates[index];
      if (c.votes > winningVotes) {
        winningVotes = c.votes;
        this.winningCandidate = c;
      }
    }
  }
}

module.exports = Constituency;
