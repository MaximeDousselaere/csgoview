import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsgoStatsViewComponent } from './csgo-stats-view.component';

describe('CsgoStatsViewComponent', () => {
  let component: CsgoStatsViewComponent;
  let fixture: ComponentFixture<CsgoStatsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsgoStatsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsgoStatsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
