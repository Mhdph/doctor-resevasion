import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosectionComponent } from './herosection.component';

describe('HerosectionComponent', () => {
  let component: HerosectionComponent;
  let fixture: ComponentFixture<HerosectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerosectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerosectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
