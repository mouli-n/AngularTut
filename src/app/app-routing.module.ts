import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { TodoAngularComponent } from './todo-angular/todo-angular.component';

const routes: Routes = [
  {
    path: 'todoapp',
    component: TodoAngularComponent,
  },
  {
    path: 'twowaybinding',
    component: ComponentInteractionComponent,
  },
  // {
  //   path: 'twowaybinding',
  //   component: TodoAngularComponent,
  // },
  {
    path: 'structuraldirectives',
    component: StructuraldirectivesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const rountingComponent = [
  TodoAngularComponent,
  StructuraldirectivesComponent,
  ComponentInteractionComponent,
];
