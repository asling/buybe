export class InMemoryDataService {
  createDb() {
    let products = [
      {id: 11, title: 'Mr. Nice'},
      {id: 12, title: 'Narco'},
      {id: 13, title: 'Bombasto'},
      {id: 14, title: 'Celeritas'},
      {id: 15, title: 'Magneta'},
      {id: 16, title: 'RubberMan'},
      {id: 17, title: 'Dynama'},
      {id: 18, title: 'Dr IQ'},
      {id: 19, title: 'Magma'},
      {id: 20, title: 'Tornado'}
    ];
    return {products};
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/