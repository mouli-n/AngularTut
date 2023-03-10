import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // selector: '.app-mouli',
  selector: 'app-mouli',
  templateUrl: './mouli.component.html',
  // template: `
  // `,
  styles: [
    `
      .text-color {
        color: lightblue;
      }
      .text-fontFamily {
        font-style: italic;
      }

      div {
        color: blue;
      }
    `,
  ],
  // styleUrls: ['./mouli.component.css']
})
export class MouliComponent implements OnInit {
  @Input() profile: any;

  @Output() newItem = new EventEmitter();

  addNewItem(value: any) {
    this.newItem.emit(value);
  }
  addItem(e: string) {
    console.log(typeof e);
    // this.newArr.push(e);
    // console.log(this.newArr);
  }
  public name = {
    name1: "Chandra Mouli",
    fav: "React",
    siteUrl: window.location.href,
    dis: false
  }
  public color = "text-color"
  public hasErr = false

  public dynamicstyle = {
    "text-fontFamily": !this.hasErr,
    "text-color": this.hasErr
  }

  ngOnInit(): void {
    //  throw new Error('Method not implemented.');
  }

  greetUser() {
    return this.name.dis = false
    // return "hello" + this.name.fav + "miss you so much"
  }

  changevalue(event: any) {
    console.log(event);
    this.name.fav = "React is best "
  }
}

/*

disadvantages
cant able to assign {{a==10}}
cant use window object like location

Attribute vs property

attribute and property are not same
Attribute -html (value cannot change)
properties -DOM (valuees however can change)

interpolation
property binding
Class Binding can make you dynamic remove and add styles
Style binding

event binding

we have to bind use (click)={byfunction}
(click)="name.fav='chandra'"

 <p [ngClass]="dynamicstyle">Dynamic styles</p>

*/
