import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  array:any = [];
  constructor(private dataService:DataService ) { }
 // array : object [];
  ngOnInit() {
  //  this.name = "Sonia";
  //  this.dataService.setName(this.name);
    this.dataService.getData().subscribe(data=> {
            this.array.push(data);
          
    });

  }
} 
