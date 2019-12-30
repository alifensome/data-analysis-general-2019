const Constituency = require("./constituency");
const Report = require("./report");
const ReportItem = require("./reportItem");
const DateLine = require("./dataLine");
const Seats = require("./seats");
class Results {
  constructor(dataRows) {
    this.data = dataRows;
    this.constituencies = [];
    this.seats= new Seats()

  }
  setResults() {
    for (let index = 0; index < this.data.length; index++) {
      const d = this.data[index];
      if(this.getConstitencyById(d.ons_id)){
        continue;
      }
      const constituency = new Constituency(d.ons_id);
      constituency.setCandidates(this.data);
      constituency.findWinner();
      this.constituencies.push(constituency);
    }
  }
  addVotesToLab(partname){
    const report = new Report()
    for (let index = 0; index < this.constituencies.length; index++) {
      let con = this.constituencies[index];
      let labour=null;
      let labourindex = 0;
      let liberalDemocrats=null;
      for (let canIndex = 0; canIndex < con.candidates.length; canIndex++) {
        const can = con.candidates[canIndex];
        if (can.party_name == "Labour" || can.party_name == "Labour and Co-operative"){
          labour = can
          labourindex = canIndex
        }
        if (can.party_name == partname){
          liberalDemocrats = can
        }
      }
      if (con.winningCandidate.party_name != partname && liberalDemocrats && labour){
        labour.votes = labour.votes + liberalDemocrats.votes
        const originalwinner = new DateLine()
        originalwinner.setFromCandidate(con.winningCandidate)
        con.candidates[labourindex] = labour
        con.findWinner()
        const newWinner = con.winningCandidate
        if( originalwinner.party_name != newWinner.party_name){
          report.swingSeats.push(new ReportItem(originalwinner,newWinner))
          console.log("NEW WINNER", newWinner, `From ${originalwinner.party_name} to ${newWinner.party_name}`)
        }
      }
    }
  }
  getConstitencyById(ons_id){
    for (let index = 0; index < this.constituencies.length; index++) {
      const con = this.constituencies[index];
      if (con.ons_id == ons_id){
        return con
      }
    }
  }
  setSeats() {
    console.log( this.constituencies.length)
    for (let index = 0; index < this.constituencies.length; index++) {
      const winningCan = this.constituencies[index].winningCandidate;
      this.seats.addSeat(winningCan.party_name)
    }
  }
}

module.exports = Results;
