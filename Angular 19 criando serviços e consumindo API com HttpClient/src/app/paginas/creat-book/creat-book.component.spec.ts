import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatBookComponent } from './creat-book.component';

describe('CreatBookComponent', () => {
  let component: CreatBookComponent;
  let fixture: ComponentFixture<CreatBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
