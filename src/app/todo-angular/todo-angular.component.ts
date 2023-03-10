import { Component, OnInit } from '@angular/core';
import { Idata } from '../Idata';
import { TododataService } from '../tododata.service';
interface data {
  name: string;
  edit: boolean;
}
@Component({
  selector: 'app-todo-angular',
  templateUrl: './todo-angular.component.html',
  styleUrls: ['./todo-angular.component.css'],
})
export class TodoAngularComponent implements OnInit {
  public arr: Idata[] = [];

  public count = 0;
  text = '';
  text2 = '';

  constructor(private _data: TododataService) {}

  ngOnInit() {
    this._data.getTodoData().subscribe((data) => (this.arr = data));
  }

  addArray() {
    // this.arr.push(this.text)
    let r = this.arr.push({ name: this.text, edit: false });
    console.log(r);

    this.logtoConsole();
  }
  logtoConsole() {
    console.log(this.arr);
  }
  onAdd() {
    this.count = this.count + 1;
  }
  onDecrement() {
    this.count = this.count - 1;
  }
  setEditTrue(i: number) {
    let newData = this.arr.map((item: any, index) => {
      let newItem = { ...item, edit: index == i ? true : item.edit };
      console.log(newItem);
      return newItem;
    });
    this.arr = [...newData];
  }

  setSaveTrue(i: number, val: any) {
    let updateData = this.arr.map((e: any, index) => {
      let newEdit = {
        ...e,
        name: index == i ? val : e.name,
        edit: index == i ? false : e.edit,
      };

      return newEdit;
    });

    this.arr = [...updateData];
  }                                                    

  delete(i: number) {
    let newData = this.arr.filter((e, index) => i !== index);
    this.arr = newData;
    console.log(i);
  }
}
