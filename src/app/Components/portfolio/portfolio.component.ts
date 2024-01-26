import { Component, OnInit } from '@angular/core';
import { DataService, detailsItem } from 'src/app/data.service';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  array:any = [];
  detailsP:any = [];
 
  constructor(private dataService:DataService ) { }

// call this function when you open the poput to show profile item detail information 
 sendDetail(dataP:detailsItem)
 {
   
    this.dataService.setDetailProfile(dataP);
    //console.log("lla"+dataP.des);

 }

  ngOnInit() {
 
    this.dataService.getData().subscribe(data=> {
    this.array.push(data);
        
    });
    // susbscribe 
    this.dataService.getDetailProfile$.subscribe((det:detailsItem)=> this.detailsP = det);
  }
}
