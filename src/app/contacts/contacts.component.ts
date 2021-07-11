import { Component, Input, OnInit } from '@angular/core';
import { contacts } from '../data/contacts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { contactssapicallService } from '../serivce/contactsapicall.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  editable = true;
  constructor(private formBuilder: FormBuilder, private contactsapi: contactssapicallService) { }
  display = "none";
  displaydel = "none";

  @Input() contacts: contacts[] = []

  submitted = false;
  form!: FormGroup;

  formnew!: FormGroup;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],

      notes: ['', [Validators.required]],
      address: ['', [Validators.required]],

    }
    );
    this.formnew = this.formBuilder.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      notes: ['', [Validators.required]],
      address: ['', [Validators.required]],

    }
    );


  }


  onSubmit(index: number) {



    let testcontact: any = {



      Name: this.form.value['name'],
      Notes: this.form.value['notes'],


      Address: this.form.value['Address']

    }

    this.contactsapi.editcontacts(testcontact, this.contacts[index]._id).subscribe(() => {
    
      alert("edit succsesful")
      this.onCloseHandled()
      this.ngOnInit()


    }
    )
  }
  addcontacts() {


    let contacts: any = {

      Name: this.formnew.value['name'],
      Notes: this.formnew.value['notes'],
      Address: this.formnew.value['address'],

      Phone: this.formnew.value['phone']

    };

    this.contacts.push(contacts)
    this.contactsapi.createcontacts(contacts).subscribe()


  }
  openModaldel() {
    this.displaydel = "block";
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
    this.displaydel = "none";

  }



  delete(index: number) {
    let contact = this.contacts[index]
    this.contactsapi.deletecontacts(contact._id).subscribe(() => alert("deletecontacts done!"))
    setTimeout(() => this.contacts.splice(index, 1), 300)
    this.onCloseHandled()

  }


}
