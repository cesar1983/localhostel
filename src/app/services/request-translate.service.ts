import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

// Models
import { Description } from '../models/Description';
import { Features } from '../models/Features';
import { Bedrooms } from '../models/Bedrooms';

@Injectable()
export class RequestTranslateService {

  private descriptionDoc: AngularFirestoreDocument<Description>;
  private features: AngularFirestoreDocument<Features>;
  private bedrooms: AngularFirestoreDocument<Bedrooms>;

  private emitChangeSource = new Subject<any>();
  changeEmitted$ = this.emitChangeSource.asObservable();


  constructor(private afs: AngularFirestore) { }

  emitChange(change: any) {
    this.emitChangeSource.next(change);
  }

  getFeaturesTranlate(language) {
    return this.afs.doc<Description>(`featureTranslateText/${language}`).valueChanges();
  }

  getHostelDescriptionTranslate(language) {
    return this.afs.doc<Description>(`descriptions/${language}`).valueChanges();
  }

  getBedroomsTranslate(language) {
    return this.afs.doc<Bedrooms>(`bedroomsText/${language}`).valueChanges();
  }

  getHowToArriveText(language) {
    return this.afs.doc<Bedrooms>(`howToArriveText/${language}`).valueChanges();
  }

  getFeaturesCityTranlate(language) {
    return this.afs.doc<Description>(`featureCityTranslateText/${language}`).valueChanges();
  }

}
