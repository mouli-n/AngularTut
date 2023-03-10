import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  template: `
  <h1>ngIf then else</h1>

  <div *ngIf="name; then thenBlock; else elseBlock"></div>

  <ng-template #thenBlock>
  <p>Angular is cool</p>
  </ng-template>

  <ng-template #elseBlock>
  <p>React is cool</p>
  </ng-template>

  <button (click)="toggle($event)">toggle</button>

  <br/><br/>

  <h1>ngSwitch</h1>

  <div style="background:{{color}}" [ngSwitch]="color" [ngClass]="colorChange">

  <input [(ngModel)]="color" type="text"/>

   <h3 *ngSwitchCase="'red'">You Picked {{color}} colour </h3>

   <h3 *ngSwitchDefault>Please select Default colour</h3>
  </div>
  <br/><br/>


  <h1>ngFor</h1>
  <div *ngFor="let frameworks of arrays;index as i">
  {{i}} -- {{frameworks}}
  </div>

  `,
  styles: [`
  .back-color {
    width:250px;
    height:250px;
  }
  `]
})
export class StructuraldirectivesComponent implements OnInit {
  public name = false
  public color = "red"
  public colorChange = {
    "back-color": true,
  }

  public arrays = ["React", "Angular", "Vue"]
  toggle(event: any) {
    this.name = !this.name
  }
  ngOnInit(): void {

  }
}

/*  Structural Directives

 Structural Directives  used for adding or removing HTML elements from the DOM
 ngIf and NgSwitch is used for render condition elements

 where as ngFor is used for rendering list of elements
   first as f
   last as l
   odd as o
   even as e

  */
