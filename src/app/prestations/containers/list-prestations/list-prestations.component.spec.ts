// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
// import { ListPrestationsComponent } from './list-prestations.component';
// import { Prestation } from '../../../shared/models/prestation.model';
// import { PrestationService } from '../../services/prestation.service';
// import { PagesTemplatesModule } from '../../../pages-templates/pages-templates.module';
// import { PrestationComponent } from '../../components/prestation/prestation.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from '../../../shared/shared.module';
// import { TabComponent } from '../../../shared/components/tab/tab.component';
// import { By } from '@angular/platform-browser';

// describe('ListPrestationsComponent', () => {
//   let component: ListPrestationsComponent;
//   let fixture: ComponentFixture<ListPrestationsComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         PagesTemplatesModule,
//         NgbModule,
//         SharedModule
//       ],
//       declarations: [ ListPrestationsComponent, PrestationComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListPrestationsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have var collection', () => {
//     expect(component.collection).toBeDefined();
//   });

//   it('collection should be iterable', () => {
//     component.collection.forEach((col) => {
//       expect(col instanceof Prestation).toBeTruthy();
//     });
//   });

//   it('should have injected PrestationService', () => {
//     expect(fixture.debugElement.injector.get(PrestationService)).toBe(TestBed.get(PrestationService));
//   });

//   it('should contain the app-tab tag', () => {
//     const elem = fixture.nativeElement.querySelector('app-tab');
//     expect(elem).toBeTruthy();
//   });



//   it('should have header input', async(() => {
//    /*  const tab = new TabComponent();
//     tab.headers = component.headers;
//     console.log(fixture.debugElement.nativeElement);
//     expect(tab.headers).toEqual(component.headers) */
//     const test = fixture.debugElement.query(By.directive(TabComponent));
//     const headers = test.attributes.headers;
//     console.log(headers);
//     console.log(test.properties);
//   }));






// });
