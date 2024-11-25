import { Data } from "@angular/router";

export class Availabilities {
    constructor(
    public id: number,
    public availableDate: Data,
    public fechaC: Date,
    public fechA: Date,
    public idCar: number){
    }
}