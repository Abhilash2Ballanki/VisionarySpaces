export class Rent {
    public homeNum:number;
    public ownerName:string;
    public address:string;
    public rating:string;

    constructor(homeNum:number, ownerName:string, address:string, rating:string){
          this.homeNum=homeNum;
          this.ownerName=ownerName;
          this.address=address;
          this.rating=rating;
    }
}
