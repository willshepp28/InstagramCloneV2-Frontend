import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgFormComponent } from './ig-form.component';

describe('IgFormComponent', () => {
  let component: IgFormComponent;
  let fixture: ComponentFixture<IgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
