import { Component } from '@angular/core';
import { ChampionshipCardComponent } from '../championship-card/championship-card.component';

@Component({
  selector: 'main-content',
  imports: [ChampionshipCardComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css',
})
export class MainContentComponent {}
