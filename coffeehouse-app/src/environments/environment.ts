// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAAEWWoAlWBYl8VwsaXQR_g9JCf0jcuRYs',
    authDomain: 'coffeehouse-71001.firebaseapp.com',
    databaseURL: 'https://coffeehouse-71001.firebaseio.com',
    projectId: 'coffeehouse-71001',
    storageBucket: 'coffeehouse-71001.appspot.com',
    messagingSenderId: '573611062532'
  }
};
