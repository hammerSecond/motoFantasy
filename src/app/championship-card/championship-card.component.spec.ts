import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipCardComponent } from './championship-card.component';

describe('ChampionshipCardComponent', () => {
  let component: ChampionshipCardComponent;
  let fixture: ComponentFixture<ChampionshipCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
