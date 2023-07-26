import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountInformationComponent } from './edit-account-information.component';

describe('EditAccountInformationComponent', () => {
  let component: EditAccountInformationComponent;
  let fixture: ComponentFixture<EditAccountInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAccountInformationComponent]
    });
    fixture = TestBed.createComponent(EditAccountInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
