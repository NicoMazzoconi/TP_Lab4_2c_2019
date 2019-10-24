import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, public router: Router, private db: AngularFirestore) { }

  login(email: string, password: string) {
    return new Promise((resolve, rejected) => {
    this.AFauth.auth.signInWithEmailAndPassword(email, password).then(res => resolve(res)).catch(err => rejected(err))
    });
  }

  logOut(){
    this.AFauth.auth.signOut().then(() => this.router.navigate(['/Login']));
  }

  register(email: string, password: string, tipo: string){
    return new Promise((resolve, rejected) => {
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
        this.db.collection('users').doc(res.user.uid).set({
          tipo : tipo,
          email : email,
          uid : res.user.uid
        })
        console.log('llegue');
      }).catch(err => {
        rejected(err);
      });
    });
  }

  traerMesas() {
    return firebase.firestore().collection('mesas').get();
  }
}
