import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  array:any = [];
  detailPersonalInf$ = this.dataService.getPersonalInf$; 
  constructor(private dataService: DataService) { }

  ngOnInit() {

      this.dataService.getData().subscribe(data=> {
      this.array.push(data);
     // console.log(this.array);
  });
  }


}
