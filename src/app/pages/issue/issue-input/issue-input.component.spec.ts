import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueInputComponent } from './issue-input.component';

describe('IssueInputComponent', () => {
  let component: IssueInputComponent;
  let fixture: ComponentFixture<IssueInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
