import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = "";

  receivedChildData(e: any) {
    console.log(e);
  }
  public childData = "";
  sendClick(val: any) {
    console.log(val);
    this.data = val;
  }
}
