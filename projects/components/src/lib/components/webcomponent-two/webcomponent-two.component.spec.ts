import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentTwoComponent } from './webcomponent-two.component';

describe('WebcomponentTwoComponent', () => {
  let component: WebcomponentTwoComponent;
  let fixture: ComponentFixture<WebcomponentTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomponentTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcomponentTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
