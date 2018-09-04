import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInterfaceComponent } from './user-interface.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../../components/header/header.component';
import { NavComponent } from '../../components/nav/nav.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserInterfaceComponent', () => {
  let component: UserInterfaceComponent;
  let fixture: ComponentFixture<UserInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        RouterTestingModule
      ],
      declarations: [ UserInterfaceComponent, HeaderComponent, NavComponent, FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
