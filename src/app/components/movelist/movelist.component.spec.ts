import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelistComponent } from './movelist.component';

describe('MovelistComponent', () => {
  let component: MovelistComponent;
  let fixture: ComponentFixture<MovelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovelistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
