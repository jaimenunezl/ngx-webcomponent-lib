import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentFourComponent } from './webcomponent-four.component';

describe('WebcomponentFourComponent', () => {
  let component: WebcomponentFourComponent;
  let fixture: ComponentFixture<WebcomponentFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomponentFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcomponentFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
