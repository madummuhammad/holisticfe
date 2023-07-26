import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactInformationComponent } from './edit-contact-information.component';

describe('EditContactInformationComponent', () => {
  let component: EditContactInformationComponent;
  let fixture: ComponentFixture<EditContactInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditContactInformationComponent]
    });
    fixture = TestBed.createComponent(EditContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
