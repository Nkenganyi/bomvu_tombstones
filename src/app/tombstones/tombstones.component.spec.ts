import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TombstonesComponent } from './tombstones.component';

describe('TombstonesComponent', () => {
  let component: TombstonesComponent;
  let fixture: ComponentFixture<TombstonesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TombstonesComponent]
    });
    fixture = TestBed.createComponent(TombstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
