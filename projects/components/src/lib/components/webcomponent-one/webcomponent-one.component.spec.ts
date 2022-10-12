import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentOneComponent } from './webcomponent-one.component';

describe('WebcomponentOneComponent', () => {
  let component: WebcomponentOneComponent;
  let fixture: ComponentFixture<WebcomponentOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebcomponentOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebcomponentOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
