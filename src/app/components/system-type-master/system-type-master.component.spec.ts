import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemTypeMasterComponent } from './system-type-master.component';

describe('SystemTypeMasterComponent', () => {
  let component: SystemTypeMasterComponent;
  let fixture: ComponentFixture<SystemTypeMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemTypeMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemTypeMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
