import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedPostsComponentComponent } from './published-posts-component.component';

describe('PublishedPostsComponentComponent', () => {
  let component: PublishedPostsComponentComponent;
  let fixture: ComponentFixture<PublishedPostsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishedPostsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishedPostsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
