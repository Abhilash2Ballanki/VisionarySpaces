export class FeignModel {
   
    public firstname:string;
    public lastname:string;
    public username:string;
    public password:string;
    public address:string;
    public aadhar:string;
    public pan:String
    public email:string;
    public gender:string;
    public role:string;
    public isActive:boolean;

    constructor(firstname:string, lastname:string,username:string, password:string, address:string,aadhar:string,pan:string,email:string, gender:string, role:string, isActive:boolean){
       this.firstname=firstname;
       this.lastname=lastname;
       this.username=username;
       this.aadhar=aadhar;
       this.address=address;
       this.pan=pan;
        this.password=password;
        this.email=email;
        this.gender=gender;
        this.role=role;
        this.isActive=isActive;
    }
}
