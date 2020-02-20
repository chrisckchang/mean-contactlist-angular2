import { Component, Input } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})

export class ContactDetailsComponent {
  @Input()
  contact: Contact;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private contactService: ContactService) {}

  createContact(contact: Contact) {
    this.contactService.createContact(contact)
      .subscribe((data: Contact) => {
        const newContact: Contact = { ...data };
        this.createHandler(newContact);
      });
  }

  updateContact(contact: Contact): void {
    this.contactService.updateContact(contact)
      .subscribe((data: Contact) => {
        const updatedContact: Contact = { ...data };
        this.updateHandler(updatedContact);
      });
  }

  deleteContact(contactId: String): void {

    this.contactService.deleteContact(contactId)
      .subscribe((deletedContactId: String) => {
        this.deleteHandler(deletedContactId);
      });
  }
}
