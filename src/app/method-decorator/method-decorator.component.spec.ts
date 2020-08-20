import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodDecoratorComponent } from './method-decorator.component';

describe('MethodDecoratorComponent', () => {
  let component: MethodDecoratorComponent;
  let fixture: ComponentFixture<MethodDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
