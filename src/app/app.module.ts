import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData, CurrencyPipe } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr-FR');

// external librairies
import { NgbModule, NgbDateParserFormatter, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

import { PrestationsModule } from './prestations/prestations.module';
import { UserInterfaceModule } from './user-interface/user-interface.module';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { NgbDateCustomParserFormatter } from './shared/services/ngdatecustomformater.service';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    UserInterfaceModule,
    PrestationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    LoginModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    CurrencyPipe,
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
