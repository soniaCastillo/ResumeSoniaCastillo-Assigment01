import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  data:any = [];
  constructor(private dataService:DataService ) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data=> {
      this.data.push(data);
     // console.log(this.data);
    });
  }

}
