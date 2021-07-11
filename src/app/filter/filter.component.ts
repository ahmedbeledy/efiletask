import { Component, Input, OnInit } from '@angular/core';

import { contacts } from '../data/contacts';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactssapicallService } from '../serivce/contactsapicall.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  contacts: contacts[] = [];
  formnew!: FormGroup;
len:any=""
  pgindex=1;

  constructor(private formBuilder: FormBuilder, private contactsapi: contactssapicallService) { }
  ngOnInit(): void {

    this.formnew = this.formBuilder.group({
      name: ['',],
      phone: ['', [, Validators.pattern("^[0-9]*$")]],
      notes: ['', []],
      address: ['', []],

    }
    );
    this.filter();
  }
  onChangePage(pe:PageEvent) {
    this.pgindex=pe.pageIndex+1;
this.filter()   }

  filter() {
    const filter = {
      Address: "",
      Notes: "", 
      Phone: "",
      Name: ""
    };
    if (this.formnew.value['name']) {
      filter.Name = this.formnew.value['name']
    }

    if (this.formnew.value['notes']) {
      filter.Notes = this.formnew.value['notes']

    }

    if (this.formnew.value['address']) {
      filter.Address = this.formnew.value['address']

    }
    if (this.formnew.value['phone']) {
      filter.Phone = this.formnew.value['phone']

    }


    this.contactsapi.getcontactsfilter( this.pgindex, filter).subscribe((res) => {

      this.contacts = res as contacts[]

this.len=this.contacts[this.contacts.length-1]
this.contacts.pop();
console.log(this.len)

    }

    )

  }
}