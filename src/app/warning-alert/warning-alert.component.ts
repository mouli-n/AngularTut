import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:`
  <p>Warning ALert !!!!!</p>
  `,
  styles:[`
p{
  color:crimson;
  border:1px solid crimson;
  background-color: rgb(220, 20, 60,0.356);
  padding: 1em;
}
  `]
})
export class WarningAlertComponent {

}
