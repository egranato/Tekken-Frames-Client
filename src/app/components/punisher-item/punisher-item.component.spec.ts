import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunisherItemComponent } from './punisher-item.component';

describe('PunisherItemComponent', () => {
  let component: PunisherItemComponent;
  let fixture: ComponentFixture<PunisherItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunisherItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PunisherItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
