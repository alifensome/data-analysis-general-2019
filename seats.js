class Seats{
    constructor(){
        this.Labour=0;
        this.Conservative=0;
        this.Scottish_National_Party=0;
        this.Plaid_Cymru=0;
        this.Liberal_Democrat=0;
        this.Labour_and_Co_operative=0;
        this.Democratic_Unionist_Party=0;
        this.Sinn_Fein=0;
        this.Social_Democratic_and_Labour_Party=0;
        this.Green=0;
        this.Speaker=0;
        this.Alliance=0;
    }
    addSeat(partyName){
        switch (partyName) {
            case "Labour":
                this.Labour++;
                break;
            case "Conservative":
                this.Conservative++;
                break;
            case "Scottish National Party":
                this.Scottish_National_Party++;
                break;
            case "Plaid Cymru":
                this.Plaid_Cymru++;
                break;
            case "Liberal Democrat":
                this.Liberal_Democrat++;
                break;
            case "Labour and Co-operative":
                this.Labour_and_Co_operative++;
                break;
            case "Democratic Unionist Party":
                this.Democratic_Unionist_Party++;
                break;
            case "Sinn Fein":
                this.Sinn_Fein++;
                break;
            case "Social Democratic and Labour Party":
                this.Social_Democratic_and_Labour_Party++;
                break;
            case "Green":
                this.Green++;
                break;
            case "Speaker":
                this.Speaker++;
                break;
            case "Alliance":
                this.Alliance++;
                break;
        
            default:
                throw new Error("Not a party")
        }
    }
}

module.exports = Seats