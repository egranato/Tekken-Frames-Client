import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunishersComponent } from './punishers.component';

describe('PunishersComponent', () => {
  let component: PunishersComponent;
  let fixture: ComponentFixture<PunishersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunishersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PunishersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
