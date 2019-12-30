const {removeAllEscapedCommas} = require('./helper')


class DataLine {
  setFromCSV(line) {
    if (line.includes('"')) {
      line = removeAllEscapedCommas(line)
    }
    const splitLine = line.split(",");
    if (splitLine.length != 17) {
      throw new Error(`expected 17 parts but got ${splitLine.length}, LINE:${line}`)
    }
    this.ons_id = splitLine[0];
    this.ons_region_id = splitLine[1];
    this.constituency_name = splitLine[2];
    this.county_name = splitLine[3];
    this.region_name = splitLine[4];
    this.country_name = splitLine[5];
    this.constituency_type = splitLine[6];
    this.party_name = splitLine[7];
    this.party_abbreviation = splitLine[8];
    this.firstname = splitLine[9];
    this.surname = splitLine[10];
    this.gender = splitLine[11];
    this.sitting_mp = splitLine[12];
    this.former_mp = splitLine[13];
    this.votes = parseInt(splitLine[14]);
    this.share = splitLine[15];
    this.change = splitLine[16];
    // console.log(this.votes)
    if (!this.votes) {
      console.log("LINE:", line)
      console.log("DATA", this)
    }
  }
  setFromCandidate(can) {
    this.ons_id = can.ons_id
    this.ons_region_id = can.ons_region_id
    this.constituency_name = can.constituency_name
    this.county_name = can.county_name
    this.region_name = can.region_name
    this.country_name = can.country_name
    this.constituency_type = can.constituency_type
    this.party_name = can.party_name
    this.party_abbreviation = can.party_abbreviation
    this.firstname = can.firstname
    this.surname = can.surname
    this.gender = can.gender
    this.sitting_mp = can.sitting_mp
    this.former_mp = can.former_mp
    this.votes = can.votes
    this.share = can.share
    this.change = can.change
  }
}

module.exports = DataLine;
