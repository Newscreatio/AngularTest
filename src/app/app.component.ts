import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1 class="hello">{{today | date: 'dd MMM YYY'}}  </h1>
  <h1 class="hello">{{today | date: 'dd/MMM/YYY'}}  </h1>
  <h1 class="hello">{{today | date: 'd-MMM-yyy'}}  </h1>
  <h1>{{today | date: 'dd-yy hh:mm:ss'}}  </h1>
  <h1>{{money | currency: '$'}}</h1>
  <h1>{{criptomoney | number: '2.2-4'}}</h1>
  <pre>{{myjson | json}}</pre>
  `,
  

styles: [`
 .hello{background-color:red}`]  
})

export class AppComponent {
  title = 'Esperimento';
  today = Date.now();
  money = 1900;
  criptomoney= 0.4124213
  myjson= {id:1, name:'Giulio'}

}
