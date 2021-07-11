import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaxlengthPipe } from './maxlength.pipe';
import { FilterComponent } from './filter/filter.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MatPaginatorModule } from '@angular/material/paginator';


  
@NgModule({
  declarations: [
    AppComponent, NavbarComponent,LoginComponent,

    



    MaxlengthPipe,


    FilterComponent,



    ContactsComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule   , MatPaginatorModule,BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
