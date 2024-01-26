import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  data:any = [];
  constructor(private dataService:DataService ) { }
  detailPersonalInf$ = this.dataService.getPersonalInf$; 
  ngOnInit() {
    this.dataService.getData().subscribe(data=> {
        this.data.push(data);
      //  console.log(this.data);
      });
  }

}
