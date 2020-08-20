import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyDecoratorComponent } from './property-decorator.component';

describe('PropertyDecoratorComponent', () => {
  let component: PropertyDecoratorComponent;
  let fixture: ComponentFixture<PropertyDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
