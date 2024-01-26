import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-detailPortfolio',
  templateUrl: './detailPortfolio.component.html',
  styleUrls: ['./detailPortfolio.component.css']
})
export class DetailPortfolioComponent implements OnInit {

  detailP$ = this.dataService.getDetailProfile$; // value of details
  @Input() detailsItem: any;  
  constructor(private readonly dataService:DataService) { }

  ngOnInit() {
  }

}
