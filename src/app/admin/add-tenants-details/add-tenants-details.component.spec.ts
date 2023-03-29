import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTenantsDetailsComponent } from './add-tenants-details.component';

describe('AddTenantsDetailsComponent', () => {
  let component: AddTenantsDetailsComponent;
  let fixture: ComponentFixture<AddTenantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTenantsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTenantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
