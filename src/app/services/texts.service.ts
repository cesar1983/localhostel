import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

interface Bedroom {
  name: string;
  description: string;
  lowSeasonPrice: string;
  highSeasonPrice: string;
}

interface Text {
  text: string;
}

@Injectable()
export class TextsService {
  // Portuguese
  joinvillePTTextDocument: AngularFirestoreDocument<Text>;
  joinvillePTText: Observable<any>;
  joinvillePTHostelTextDocument: AngularFirestoreDocument<Text>;
  joinvillePTHostelText: Observable<any>;
  PTBedroomsCollection: AngularFirestoreCollection<Bedroom>;
  PTbedrooms: Observable<Bedroom[]>;

  // English
  joinvilleENTextDocument: AngularFirestoreDocument<Text>;
  joinvilleENText: Observable<any>;
  joinvilleENHostelTextDocument: AngularFirestoreDocument<Text>;
  joinvilleENHostelText: Observable<any>;
  ENBedroomsCollection: AngularFirestoreCollection<Bedroom>;
  ENbedrooms: Observable<Bedroom[]>;

  // Germany
  joinvilleDETextDocument: AngularFirestoreDocument<Text>;
  joinvilleDEText: Observable<any>;
  joinvilleDEHostelTextDocument: AngularFirestoreDocument<Text>;
  joinvilleDEHostelText: Observable<any>;


  constructor(private afs: AngularFirestore) {
    // Portuguese translation
    this.joinvillePTTextDocument = this.afs.doc('texts/PTjoinvilleText');
    this.joinvillePTText = this.joinvillePTTextDocument.valueChanges();

    this.joinvillePTHostelTextDocument = this.afs.doc('texts/PTjoinvilleHostelText')
    this.joinvillePTHostelText = this.joinvillePTHostelTextDocument.valueChanges();

    this.PTBedroomsCollection = this.afs.collection('PTbedrooms', ref => {
      return ref.orderBy('highSeasonPrice', 'desc');
    });
    this.PTbedrooms = this.PTBedroomsCollection.valueChanges();



    // English translation
    this.joinvilleENTextDocument = this.afs.doc('texts/ENjoinvilleText');
    this.joinvilleENText = this.joinvilleENTextDocument.valueChanges();

    this.joinvilleENHostelTextDocument = this.afs.doc('texts/ENjoinvilleHostelText')
    this.joinvilleENHostelText = this.joinvilleENHostelTextDocument.valueChanges();

    this.ENBedroomsCollection = this.afs.collection('ENbedrooms', ref => {
      return ref.orderBy('highSeasonPrice', 'desc');
    });
    this.ENbedrooms = this.ENBedroomsCollection.valueChanges();


    // Germany translation
    this.joinvilleDETextDocument = this.afs.doc('texts/DEjoinvilleText');
    this.joinvilleDEText = this.joinvilleDETextDocument.valueChanges();

    this.joinvilleDEHostelTextDocument = this.afs.doc('texts/DEjoinvilleHostelText')
    this.joinvilleDEHostelText = this.joinvilleDEHostelTextDocument.valueChanges();
  }
  
  // PORTUGUESE GETTERS
  getPTJoinvilleText() {
    return this.joinvillePTText;
  }
  getPTJoinvilleHostelText() {
    return this.joinvillePTHostelText;
  }
  getPTBedrooms() {
    return this.PTbedrooms;
  }

  // ENGLISH GETTERS
  getENJoinvilleText() {
    return this.joinvilleENText;
  }
  getENJoinvilleHostelText() {
    return this.joinvilleENHostelText;
  }
  getENBedrooms() {
    return this.ENbedrooms;
  }

  // GERMANY GETTERS
  getDEJoinvilleText() {
    return this.joinvilleDEText;
  }
  getDEJoinvilleHostelText() {
    return this.joinvilleDEHostelText;
  }

}

