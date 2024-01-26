import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  detailPersonalInf$ = this.dataService.getPersonalInf$; 
  constructor(private readonly dataService:DataService) { }

  ngOnInit() {
  }

}
