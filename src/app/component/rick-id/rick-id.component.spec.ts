import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickIdComponent } from './rick-id.component';

describe('RickIdComponent', () => {
  let component: RickIdComponent;
  let fixture: ComponentFixture<RickIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RickIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
