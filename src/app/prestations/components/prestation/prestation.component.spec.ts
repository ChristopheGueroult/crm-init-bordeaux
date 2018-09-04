// import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

// import { PrestationComponent } from './prestation.component';
// import { Prestation } from '../../../shared/models/prestation.model';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { StatePrestation } from '../../../shared/enums/state-prestation.enum';
// import { SharedModule } from '../../../shared/shared.module';

// describe('PrestationComponent', () => {
//   let component: PrestationComponent;
//   let fixture: ComponentFixture<PrestationComponent>;
//   let testPresta: Prestation;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         NgbModule.forRoot(),
//         SharedModule
//       ],
//       declarations: [ PrestationComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PrestationComponent);
//     component = fixture.componentInstance;
//     testPresta = new Prestation('Dev Angular', 'coderbase', '2018-11-20T23:00:00.000Z', '2018-11-21T23:00:00.000Z', 500, 2);
//     component.item = testPresta;
//     fixture.detectChanges();
//   });

//   afterEach(() => {
//     fixture.destroy();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should have @Input property item', () => {
//     expect(fixture.nativeElement.querySelector('td:first-child').innerText).toEqual(testPresta.type);
//   });

//   it('should have property options contain list of options', () => {
//     expect(component.options).toEqual(Object.values(StatePrestation));
//   });


// });
