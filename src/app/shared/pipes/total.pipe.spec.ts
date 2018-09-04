// import { TotalPipe } from './total.pipe';
// import { Prestation } from '../models/prestation.model';

// describe('TotalPipe', () => {
//   let pipe: TotalPipe;
//   let presta: Prestation;
//   beforeEach( () => {
//     pipe = new TotalPipe();
//     presta =  new Prestation('Dev Angular', 'coderbase',
//     '2018-11-20T23:00:00.000Z', '2018-11-21T23:00:00.000Z', 500, 2);

//   });

//   it('create an instance', () => {
//     expect(pipe).toBeTruthy();
//   });

//   it('should return TotalTTC if arg > 0', () => {
//     expect(pipe.transform(presta, presta.taux_tva)).toEqual(presta.totalTTC(presta.taux_tva));
//    });

//   it('should return TotalHT if no arg passed to the pipe ', () => {
//     expect(pipe.transform(presta)).toEqual(presta.totalHT());
//   });

//   it('should return empty string if value is null ', () => {
//     expect(pipe.transform(null)).toEqual('');
//   });

//   it('should return NAJ if arg passed <= 0 ', () => {
//     expect(pipe.transform(presta, 0  )).toEqual(presta.totalTTC(0));
//   });

//   it('should  call totalTTC if pass value > -1  ', () => {
//     spyOn(presta, 'totalTTC');
//     pipe.transform(presta, 0  );
//     expect(presta.totalTTC).toHaveBeenCalledWith(0);
//   });

//   it('should have call totalHT if no arg  ', () => {
//     spyOn(presta, 'totalHT');
//     pipe.transform(presta);
//     expect(presta.totalHT).toHaveBeenCalled();
//   });



// });
