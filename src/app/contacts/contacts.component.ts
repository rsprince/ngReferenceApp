import { ContactService } from './contact.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  message: string;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.message = this.contactService.greating;
  }

}
