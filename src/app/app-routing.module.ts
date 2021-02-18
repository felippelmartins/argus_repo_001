import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {OpCrudComponent} from './views/op-crud/op-crud.component';
import {AlarmesComponent} from './views/alarmes/alarmes.component';
import {OpCreateComponent} from './components/op/op-create/op-create.component';
import { ProcessamentoComponent } from './views/alarmes/processamento/processamento.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "ops",
  component: OpCrudComponent
}, {
  path: "alarmes",
  component: AlarmesComponent
}, {
  path: "ops/create",
  component: OpCreateComponent
},{
  path: "alarmes/processamento",
  component: ProcessamentoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
