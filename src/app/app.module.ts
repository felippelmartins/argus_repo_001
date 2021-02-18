import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule}  from '@angular/material/sidenav';
import {MatCardModule}  from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { OpCrudComponent } from './views/op-crud/op-crud.component';
import { AlarmesComponent } from './views/alarmes/alarmes.component';
import { OpCreateComponent } from './components/op/op-create/op-create.component';
import {MatButtonModule}  from '@angular/material/button';
import {MatSnackBarModule}  from '@angular/material/snack-bar';

import {HttpClient, HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { OpReadComponent } from './components/op/op-read/op-read.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { OpRead2Component } from './components/op/op-read2/op-read2.component';

import {TrataIdPipe} from './views/alarmes/alarme-id-tratamento.pipe';
import {TrataUrlPipe} from  './views/alarmes/alarme-url-tratamento.pipe';
import {TrataTipoPipe} from './views/alarmes/alarme-tipo-tratamento.pipe';
import { ProcessamentoComponent } from './views/alarmes/processamento/processamento.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {ReactiveFormsModule} from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeAuthComponent } from './layout/home-auth/home-auth.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    OpCrudComponent,
    AlarmesComponent,
    OpCreateComponent,
    OpReadComponent,
    OpRead2Component,
    TrataIdPipe,
    TrataUrlPipe,
    TrataTipoPipe,
    ProcessamentoComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthenticationComponent,
    HomeAuthComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatCheckboxModule,
    MatIconModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProcessamentoComponent]
})
export class AppModule { }
