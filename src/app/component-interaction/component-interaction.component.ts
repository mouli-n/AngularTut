import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css'],
})
export class ComponentInteractionComponent implements OnInit {
  profile: string = 'mouli';
  public newArr: string[] = [];
  addItem(e: string) {
    console.log(typeof e);
    this.newArr.push(e);
    console.log(this.newArr);
  }
  ngOnInit(): void {}
}
