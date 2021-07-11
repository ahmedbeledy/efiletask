import { AuthgardGuard } from './gaurd/authgard.guard';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  

 {path:'filter', component : FilterComponent, canActivate:[AuthgardGuard] },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 