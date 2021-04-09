import { RefSharedModule } from './../../projects/ref-shared/src/lib/ref-shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './shared/angular-materials.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
//import { DataComponent } from './data/data/data.component';
import { DataModule } from './data/data.module';
import { HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts/contacts.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DashboardComponent,
    FormComponent,
    ContactsComponent,
    //DataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule,
    HttpClientModule,
    DataModule,
    RefSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
