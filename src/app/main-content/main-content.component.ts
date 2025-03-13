import { Component } from '@angular/core';
import { ChampionshipCardComponent } from '../championship-card/championship-card.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'main-content',
  imports: [ChampionshipCardComponent, RouterModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {}
