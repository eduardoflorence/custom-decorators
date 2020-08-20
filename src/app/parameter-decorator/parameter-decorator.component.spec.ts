import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterDecoratorComponent } from './parameter-decorator.component';

describe('ParameterDecoratorComponent', () => {
  let component: ParameterDecoratorComponent;
  let fixture: ComponentFixture<ParameterDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
