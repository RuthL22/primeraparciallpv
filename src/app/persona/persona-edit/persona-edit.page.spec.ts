import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonaEditPage } from './persona-edit.page';

describe('PersonaEditPage', () => {
  let component: PersonaEditPage;
  let fixture: ComponentFixture<PersonaEditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
