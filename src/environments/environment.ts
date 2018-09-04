// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  hmr: false,
  firebase: {
    apiKey: 'AIzaSyClE_cpk6oSkUwEhc-ND7WdMz1sSIxgH9A',
    authDomain: 'tdd-crm-init.firebaseapp.com',
    databaseURL: 'https://tdd-crm-init.firebaseio.com',
    projectId: 'tdd-crm-init',
    storageBucket: 'tdd-crm-init.appspot.com',
    messagingSenderId: '795068133542'
  },
  api_url : 'http://localhost:4200/api'
};


/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
