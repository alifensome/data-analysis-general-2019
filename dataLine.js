class DataLine {
  setFromCSV(line) {
    const splitLine = line.split(",");
    // console.log(splitLine);
    console.log(splitLine[0]);
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
  }
}

module.exports = DataLine;
