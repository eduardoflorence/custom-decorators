import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFactoryComponent } from './custom-factory.component';

describe('CustomFactoryComponent', () => {
  let component: CustomFactoryComponent;
  let fixture: ComponentFixture<CustomFactoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFactoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
