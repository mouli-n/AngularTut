import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: #fff;
      }
      .greater5{
        color:yellow;
        font-weight:700;
        font-size:1em
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = Math.random() > 0.5 ? 'offline' : 'online';
  addItem: number[] = [];
  count: number = 0;
  togglePassword=false
  getServerStatus() {
    return this.serverStatus;
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  getList() {
    return this.addItem.length>=5 ? 'blue' : '';
  }
  addList() {
    this.togglePassword=!this.togglePassword;
    this.count = this.count + 1;
    this.addItem.push(this.count);
  }
}
