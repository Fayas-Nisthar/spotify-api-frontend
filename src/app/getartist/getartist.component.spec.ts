import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetartistComponent } from './getartist.component';

describe('GetartistComponent', () => {
  let component: GetartistComponent;
  let fixture: ComponentFixture<GetartistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetartistComponent]
    });
    fixture = TestBed.createComponent(GetartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
