import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactjs',
  // templateUrl: './reactjs.component.html',
  // styleUrls: ['./reactjs.component.css']
  template: `
    <div>React JS</div>
    <input #myinput type="text" />
    <br /><br />
    <button (click)="logChange(myinput.value)">Onchange</button>
    <input [(ngModel)]="name" type="text" />
    {{ name }}
  `,
  styles: [``],
})
export class ReactjsComponent implements OnInit {
  public name = '';
  logChange = (value: any) => {
    if (value.length > 0) {
      console.log(value);
    }
  };
  ngOnInit(): void {}
}

/*
#myinput   is Template Reference Variables
 which can able to access the inputonchange

 ngModule directive is for two way binding
 [] proprty binding data flow class to template where as () is for template to the class so it is called two way data binding



 */
