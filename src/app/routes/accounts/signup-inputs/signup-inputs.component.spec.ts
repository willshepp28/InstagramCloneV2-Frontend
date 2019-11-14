import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInputsComponent } from './signup-inputs.component';

describe('SignupInputsComponent', () => {
  let component: SignupInputsComponent;
  let fixture: ComponentFixture<SignupInputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupInputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
