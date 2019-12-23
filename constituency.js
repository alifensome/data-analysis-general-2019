class Constituency {
  constructor(id) {
    this.id = id;
    this.candidates = [];
  }
  setCandidates(dataRows) {
    for (let index = 0; index < dataRows.length; index++) {
      const d = dataRows[index];
      if (d.id == this.id) {
        this.candidates.push(d);
      }
    }
  }
  findWinner() {
    const winningVotes = 0;
    for (let index = 0; index < this.candidates.length; index++) {
      const c = this.candidates[index];
      if (c.votes > winningVotes) {
        winningVotes = c.votes;
        this.winningCandidate = c;
      }
    }
  }
}

module.exports = Constituency;
