import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Global } from "./global";
import { Observable } from 'rxjs';
import { Availabilities } from "../modelos/availabilities";
import { Car } from "../modelos/car";
import { Location } from "@angular/common";
import { People } from "../modelos/people";
import { Reservations } from "../modelos/reservations";

@Injectable()
export class PaginaServices{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver todos SERVICES
    //http://localhost:3000/api/location
    getAllLocations():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'api/location',{headers:headers});
    }

    //http://localhost:3000
    searchCarsByLocation(locationId: number): Observable<Car[]> {
        const url = `${this.url}api/car/search/locationId/${locationId}`;
        return this._http.get<Car[]>(url);
    }

    //http://localhost:3000/api/car
    getAllCars():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'api/car',{headers:headers});
    }
    //http://localhost:3000/api/reservation
    getAllReservations():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'api/reservation',{headers:headers});
    }
    //http://localhost:3000/api/person
    getAllPeople():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'api/person',{headers:headers});
    }
    //http://localhost:3000/api/location
    getAllAvailabilities():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'api/availability',{headers:headers});
    }
}