import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginspaceComponent } from './loginspace.component';

describe('LoginspaceComponent', () => {
  let component: LoginspaceComponent;
  let fixture: ComponentFixture<LoginspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
