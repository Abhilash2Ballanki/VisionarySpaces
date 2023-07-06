export class FeignModel {
    public id:number;
    public name:string;
    public password:string;
    public email:string;
    public gender:string;
    public role:string;
    public isActive:boolean;

    constructor(id:number, name:string, password:string, email:string, gender:string, role:string, isActive:boolean){
        this.id=id;
        this.name=name;
        this.password=password;
        this.email=email;
        this.gender=gender;
        this.role=role;
        this.isActive=isActive;
    }
}
