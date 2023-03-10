import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  createdServer="";
  username="";
  serverName=""
  serverCreated=false
  constructor() {
    setTimeout(() => {
      return (this.allowNewServer = true);
    }, 2000);
  }
  addUser(){
this.username=""
  }
  updateInput(event:Event){
this.serverName=(<HTMLInputElement>event.target).value
  }
  addServer(){
    this.serverCreated=true;
    // this.createdServer="server was creacted Name is "+this.serverName
  }

}
