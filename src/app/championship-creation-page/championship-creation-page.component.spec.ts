import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionshipCreationPageComponent } from './championship-creation-page.component';

describe('ChampionshipCreationPageComponent', () => {
  let component: ChampionshipCreationPageComponent;
  let fixture: ComponentFixture<ChampionshipCreationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChampionshipCreationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChampionshipCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
