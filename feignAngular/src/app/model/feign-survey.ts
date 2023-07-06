export class FeignSurvey {
    public surveyNum:number;
    public ownerName:string;
    public fatherName:string;
    public numOfPeople:number;
    public numOfAcres:number;
    public address:string;
    public isactive:boolean;

    constructor(surveyNum:number,
        
        ownerName:string,
         fatherName:string,
          numOfPeople:number,
           numOfAcres:number,
            address:string,
             isactive:boolean){
        this.surveyNum=surveyNum;
        this.ownerName=ownerName;
        this.fatherName=fatherName;
        this.numOfPeople=numOfPeople;
        this.numOfAcres=numOfAcres;
        this.address=address;
        this.isactive=isactive;
    }
}
