import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderSubComponent } from './app-header-sub.component';

describe('AppHeaderSubComponent', () => {
  let component: AppHeaderSubComponent;
  let fixture: ComponentFixture<AppHeaderSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
