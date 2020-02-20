import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {
    private contactsUrl = '/api/contacts';

    constructor (private http: HttpClient) {}

    // get("/api/contacts")
    getContacts(): Observable<Contact[]> {
      return this.http.get<Contact[]>(this.contactsUrl);
    }

    // post("/api/contacts")
    createContact(newContact: Contact): Observable<Contact> {
      return this.http.post<Contact>(this.contactsUrl, newContact);
    }

    // get("/api/contacts/:id") endpoint not used by Angular app

    // delete("/api/contacts/:id")
    deleteContact(delContactId: String): Observable<String> {
      return this.http.delete<String>(this.contactsUrl + '/' + delContactId);
    }

    // put("/api/contacts/:id")
    updateContact(putContact: Contact): Observable<Contact> {
      const putUrl = this.contactsUrl + '/' + putContact._id;
      return this.http.put<Contact>(putUrl, putContact);
    }

    private handleError (error: any): Promise<any> {
      const errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console
      return Promise.reject(errMsg);
    }
}
