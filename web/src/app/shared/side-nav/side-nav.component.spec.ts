import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import {RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideNavComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(SideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
