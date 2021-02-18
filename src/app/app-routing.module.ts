import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {OpCrudComponent} from './views/op-crud/op-crud.component';
import {AlarmesComponent} from './views/alarmes/alarmes.component';
import {OpCreateComponent} from './components/op/op-create/op-create.component';
import { ProcessamentoComponent } from './views/alarmes/processamento/processamento.component';
import {HomeAuthComponent} from './layout/home-auth/home-auth.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeAuthComponent,
    children: [
      {path: "", component: HomeComponent},
      {path: "ops", component: OpCrudComponent},
      {path: "alarmes", component: AlarmesComponent},
      {path: "ops/create", component: OpCreateComponent},
      {path: "alarmes/processamento", component: ProcessamentoComponent}
    ],
    canActivate: [AuthGuard]

  },
  {
    path:'',
    component: AuthenticationComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'create-account', component: CreateAccountComponent}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
