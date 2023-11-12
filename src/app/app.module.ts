import { LoginComponent } from './Auth/Login/components/login/login.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutCostumerComponent } from './layout-costumer/layout-costumer.component';
import { AppRoutingModule } from './app-routing.module';
import { LogicielModule } from './logiciel/logiciel/logiciel.module';
import { EnvironModule } from './environ/environ/environ.module';
import { RexModule } from './rex/rex/rex.module';
import { IncidentModule } from './incident/incident/incident.module';
import { DashboardModule } from './dashboard/dashboard/dashboard.module';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//import { TokenInterceptorService } from './interceptors/token-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    LayoutCostumerComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LogicielModule,
    EnvironModule,
    RexModule,
    IncidentModule,
    DashboardModule,
    DataTablesModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [
   // {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  //  {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: TokenInterceptorService,
  //   multi: true,
  // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
