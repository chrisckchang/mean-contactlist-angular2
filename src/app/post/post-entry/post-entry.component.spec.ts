import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEntryComponent } from './post-entry.component';

describe('PostEntryComponent', () => {
  let component: PostEntryComponent;
  let fixture: ComponentFixture<PostEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
