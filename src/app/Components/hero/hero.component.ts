import { Component, OnInit } from '@angular/core';
import { DataService, personalInf } from 'src/app/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

 
  array:any = [];
  detailsPersonalInf:any = [];
  
  // retrieve personal information
  detailPersonalInf1$ = this.dataService.getPersonalInf$; 
  constructor(private dataService:DataService ) { }
 
  ngOnInit() {
    this.dataService.getPersonalInf$.subscribe((det:personalInf)=> this.detailsPersonalInf = det);
    this.dataService.getData().subscribe(data=> {
            this.array.push(data);
          // console.log("name"+this.array[0].personalInf.name);
           this.dataService.setPersonalInf(<personalInf>this.array[0].personalInf);
    });

   
     // susbscribe 
  
       
    
  }

}
