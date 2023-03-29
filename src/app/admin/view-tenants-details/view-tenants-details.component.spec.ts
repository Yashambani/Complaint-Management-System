import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTenantsDetailsComponent } from './view-tenants-details.component';

describe('ViewTenantsDetailsComponent', () => {
  let component: ViewTenantsDetailsComponent;
  let fixture: ComponentFixture<ViewTenantsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTenantsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTenantsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
