import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resume';
  constructor(private titleService:Title, private meta:Meta)
  {
      titleService.setTitle('Resume Sonia Castillo');
      meta.addTag({name:'viewport', content:' width=device-width, initial-scale=1.0'})


  }
}
  