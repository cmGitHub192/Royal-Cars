export class Reservations {
    constructor(
    public id: number,
    public startDate: Date,
    public endDate: Date,
    public TotalPrice: number,
    public fechaC: Date,
    public fechA: Date,
    public carId: number,
    public custosmerId: Number){
    }
}