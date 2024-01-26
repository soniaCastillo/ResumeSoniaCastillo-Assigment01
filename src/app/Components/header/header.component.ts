import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // retrieve persnal information
  detailPersonalInf$ = this.dataService.getPersonalInf$; 
  constructor(private dataService:DataService ) { }

  ngOnInit() {
  }

}
