import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovelistItemComponent } from './movelist-item.component';

describe('MovelistItemComponent', () => {
  let component: MovelistItemComponent;
  let fixture: ComponentFixture<MovelistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovelistItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovelistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
