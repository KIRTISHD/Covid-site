import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConciseDataComponentComponent } from './concise-data-component.component';

describe('ConciseDataComponentComponent', () => {
  let component: ConciseDataComponentComponent;
  let fixture: ComponentFixture<ConciseDataComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConciseDataComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConciseDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
