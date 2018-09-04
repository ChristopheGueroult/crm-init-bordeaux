// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { MainPrestationsComponent } from './main-prestations.component';
// import { PagesTemplatesModule } from '../../../pages-templates/pages-templates.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from '../../../shared/shared.module';
// import { ListPrestationsComponent } from '../list-prestations/list-prestations.component';
// import { PrestationComponent } from '../../components/prestation/prestation.component';

// describe('MainPrestationsComponent', () => {
//   let component: MainPrestationsComponent;
//   let fixture: ComponentFixture<MainPrestationsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         PagesTemplatesModule,
//         NgbModule,
//         SharedModule
//       ],
//       declarations: [ListPrestationsComponent, PrestationComponent, MainPrestationsComponent]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MainPrestationsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should contain the app-template-one tag', () => {
//     const elem = fixture.nativeElement.querySelector('app-template-one');
//     expect(elem).toBeTruthy();
//   });

//   it('should contain the app-list-prestations tag in app-template-one tag', () => {
//     const elem = fixture.nativeElement.querySelector('app-template-one app-list-prestations');
//     expect(elem).toBeTruthy();
//   });
// });
