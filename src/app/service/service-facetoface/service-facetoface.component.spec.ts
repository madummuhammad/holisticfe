import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceFacetofaceComponent } from './service-facetoface.component';

describe('ServiceFacetofaceComponent', () => {
  let component: ServiceFacetofaceComponent;
  let fixture: ComponentFixture<ServiceFacetofaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceFacetofaceComponent]
    });
    fixture = TestBed.createComponent(ServiceFacetofaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
