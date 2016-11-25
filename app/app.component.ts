    import { Component } from '@angular/core';
    
    @Component({
      selector: 'my-app',
      template: ` 
                  <router-outlet></router-outlet>
                `,
     // template: '<buybe-header></buybe-header><buybe-content></buybe-content>',
    //  styleUrls:['app/app.component.css'],
      //directives: [BuybeHeaderComponent,BuybeContentComponent],
      
    })
    export class AppComponent {
      title = 'Tour of buybe';
     }