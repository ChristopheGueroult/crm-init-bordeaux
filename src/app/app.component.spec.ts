import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserInterfaceModule } from './user-interface/user-interface.module';
import { PrestationsModule } from './prestations/prestations.module';
import { RouterTestingModule} from '@angular/router/testing';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
describe('AppComponent', () => {
  let fixture;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        UserInterfaceModule,
        PrestationsModule,
        RouterTestingModule,
        SharedModule,
        LoginModule,
      ],
      declarations: [
        AppComponent
      ],
    });
    fixture = TestBed.createComponent(AppComponent);
  }));
  // it('should create the app', async(() => {
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));


  // it('should contain the app-user-interface tag', async(() => {
  //   const elem = fixture.nativeElement.querySelector('app-user-interface');
  //   expect(elem).toBeTruthy();
  // }));

  // step 1
  // it('should contain element with header attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('[header]');
  //   expect(elem).toBeTruthy();
  // }));

  // it('should contain element with nav attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('app-nav[nav]');
  //   expect(elem).toBeTruthy();
  // }));

  // it('should contain element with contents attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('[contents]');
  //   expect(elem).toBeTruthy();
  // }));

  // it('should contain element with footer attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('app-footer[footer]');
  //   expect(elem).toBeTruthy();
  // }));

  // step 2
  // it('should contain element app-header inside element with header attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('[header] app-header');
  //   expect(elem).toBeTruthy();
  // }));

  // it('should contain element app-header with header attribute', async(() => {
  //   const elem = fixture.nativeElement.querySelector('app-header[header]');
  //   expect(elem).toBeTruthy();
  // }));


});
