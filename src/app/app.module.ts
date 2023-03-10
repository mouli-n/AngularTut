import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { MouliComponent } from './mouli/mouli.component';
import { ReactjsComponent } from './reactjs/reactjs.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { TodoAngularComponent } from './todo-angular/todo-angular.component';
import { TododataService } from './tododata.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
@NgModule({
  declarations: [
    AppComponent,
    MouliComponent,
    ReactjsComponent,
    rountingComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [TododataService],
  bootstrap: [AppComponent],//angular start this app intial
})
export class AppModule {}
