import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

 
  array:any = [];
  constructor(private dataService:DataService ) { }

  ngOnInit() {
  //  this.name = "Sonia";
  //  this.dataService.setName(this.name);
    this.dataService.getData().subscribe(data=> {
            this.array.push(data);
          
    });

  }


}
