export class Car {
    constructor(
    public id: number,
    public brand: string,
    public model: string,
    public year: number,
    public pricePerDay: number,
    public fechaC: Date,
    public fechA: Date,
    public locationId: number){
    }
}