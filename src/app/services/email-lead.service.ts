import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { EmailLead } from '../models/EmailLead';

@Injectable()
export class EmailLeadService {
  emailLeadCollection: AngularFirestoreCollection<EmailLead>;
  emailLeads: Observable<EmailLead[]>

  constructor(private afs: AngularFirestore) {
    this.emailLeadCollection = afs.collection<EmailLead>('emailLeads');
  }

  addEmailLead(emailLead: any) {
    this.emailLeadCollection.add(emailLead);
  }

}
