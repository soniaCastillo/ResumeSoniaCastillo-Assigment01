import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutComponent } from './Components/about/about.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ResumeComponent } from './Components/resume/resume.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ReferencesComponent } from './Components/references/references.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HeroComponent } from './Components/hero/hero.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailPortfolioComponent } from './Components/detailPortfolio/detailPortfolio.component';

@NgModule({
  declarations: [
    HeroComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ResumeComponent,
    PortfolioComponent,
    DetailPortfolioComponent,
    ReferencesComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  
    
  
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
