import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTenantsDetailsComponent } from './edit-tenants-details.component';

describe('EditTenantsDetailsComponent', () => {
  let component: EditTenantsDetailsComponent;
  let fixture: ComponentFixture<EditTenantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTenantsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTenantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
