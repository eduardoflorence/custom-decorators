import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassDecoratorComponent } from './class-decorator.component';

describe('ClassDecoratorComponent', () => {
  let component: ClassDecoratorComponent;
  let fixture: ComponentFixture<ClassDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
