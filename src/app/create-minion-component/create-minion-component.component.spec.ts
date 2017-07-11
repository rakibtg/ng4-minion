import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMinionComponentComponent } from './create-minion-component.component';

describe('CreateMinionComponentComponent', () => {
  let component: CreateMinionComponentComponent;
  let fixture: ComponentFixture<CreateMinionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMinionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMinionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
