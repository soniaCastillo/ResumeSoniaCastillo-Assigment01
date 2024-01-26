import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

// interface to store the details of each profile item  
export interface detailsItem{
  des:string;
  src:string;
  type : string;

}
// interface to load the general personal inf 
export interface personalInf{
  name: string;
  bithday: string;
  age: string;
  degree:string;
  webSite:string;
  phone:string;
  email:string;
  city:string;
  location:string;
  backgroudItem: string;
  freelancer: string;
 
  }

const initpersonalInf:personalInf={
  name: "",
  bithday: "",
  age: "",
  degree:"",
  webSite:"",
  phone:"",
  email:"",
  city:"",
  location:"",
  backgroudItem: "",
  freelancer:""
};
const initDetails:detailsItem={
  des:"det",
  src:"url",
  type : "APP"

};
@Injectable({
  providedIn: 'root'
})
export class DataService {

// observables
private detailsProfile$ = new BehaviorSubject<detailsItem>(initDetails);
private detailPersonalInf = new BehaviorSubject<personalInf>(initpersonalInf); 

constructor(private http:HttpClient) { }

get getDetailProfile$():Observable<detailsItem>{

  return this.detailsProfile$.asObservable();

}
setDetailProfile(det:detailsItem):void{
  this.detailsProfile$.next(det);

}

get getPersonalInf$():Observable<personalInf>{
  return this.detailPersonalInf.asObservable();

}

setPersonalInf(per:personalInf):void{
  this.detailPersonalInf.next(per);

}

getData(){
  return this.http.get('/assets/dataResume.json');

}
}

