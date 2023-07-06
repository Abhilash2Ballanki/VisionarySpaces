export class SmsClass {
    phoneNo:string;
	fullName:string;
	city:string;
	occupation:string;
	requiredAmount:number
	salary:number;
	monthlyemi:number;
	tenure:number;
    constructor(phoneNo:string,fullName:string,city:string,occupation:string,requiredAmount:number,salary:number,monthlyemi:number,tenure:number){
        this.phoneNo=phoneNo;
        this.fullName=fullName;
        this.city=city;
        this.occupation=occupation;
        this.requiredAmount=requiredAmount;
        this.salary=salary;
        this.monthlyemi=monthlyemi;
        this.tenure=tenure;
    }

}
