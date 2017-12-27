import { Injectable } from '@angular/core';
import {
   AngularFirestore,
   AngularFirestoreCollection
} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Reservation {
   id?: string;
   displayName: string;
   emailAddress: string;
   guests: number;
   date: Date;
   comments: string;
}

@Injectable()
export class DataService {

   reservationsCollectionRef: AngularFirestoreCollection <Reservation> ;
   reservations$: Observable<Reservation[]> ;

   constructor(private afs: AngularFirestore) {
      this.reservationsCollectionRef = afs.collection <Reservation> ('reservations');
      this.reservations$ = this.reservationsCollectionRef
         .snapshotChanges()
         .map(actions => {
            return actions.map(action => {
               const data = action.payload.doc.data() as Reservation;
               const id = action.payload.doc.id;
               return { id, ...data };
            });
         });
   }

   addReservation(reservation: Reservation): void {
      this.reservationsCollectionRef
          .add(reservation)
          .then(() => {
            console.log('Successfully added reservation.');
          });
   }

   getReservations(): Observable<Reservation[]> {
     return this.reservations$;
   }
}
