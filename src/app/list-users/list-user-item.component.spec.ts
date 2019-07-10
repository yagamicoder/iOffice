import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserItemComponent } from './list-user-item.component';

describe('ListUserItemComponent', () => {
  let component: ListUserItemComponent;
  let fixture: ComponentFixture<ListUserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
