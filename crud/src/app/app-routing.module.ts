import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './pessoa/listar/listar.component';
import { AddComponent } from './pessoa/add/add.component';
import { EditComponent } from './pessoa/edit/edit.component';


const routes: Routes = [
  {path:'listar', component: ListarComponent,},
  {path:'add',component:AddComponent},
  {path:'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
