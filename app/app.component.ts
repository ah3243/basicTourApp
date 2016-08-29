import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
            <h2>This is the\n {{title}}</h2>
            <router-outlet></router-outlet>
  `
})
export class AppComponent { 
  title='Tour Guide App';
}
