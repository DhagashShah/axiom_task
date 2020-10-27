import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { FavComponent } from './fav/fav.component';
import { MenuComponent } from './menu/menu.component';
import {HttpClientModule} from '@angular/common/http';
import { from } from 'rxjs';
import { DataTablesModule } from 'angular-datatables';
import {ButtonModule} from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FavComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    DataTablesModule,
    ButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
