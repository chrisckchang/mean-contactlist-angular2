import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
//import { AngularFireDatabase } from "@angular/fire/database";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private additionalUserInfo = {};

  private PHOTO_SIZE = { width: 720, height: 720 };

  users: Observable<any[]>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.user;
    console.log(this.additionalUserInfo);

    //this.users = db.list("users").valueChanges();

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
        console.log(this.userDetails);
        console.log(user);
      } else {
        this.userDetails = null;
      }
    });
  }

  login = () => {
    const provider = new auth.FacebookAuthProvider();
    provider.addScope("user_birthday");
    provider.addScope("user_gender");

    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        console.log(data.additionalUserInfo.profile);
      })
      .catch(err => console.log(err.message));
  };

  isLoggedIn = () => {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  };

  logout = () => {
    this.afAuth.auth.signOut();
  };

  getUserDetails = () => {
    return {
      name: this.userDetails.displayName,
      photoURL:
        this.userDetails.photoURL +
        "?type=large&width=" +
        this.PHOTO_SIZE.width +
        "&height=" +
        this.PHOTO_SIZE.height,
      age: 18
    };
  };
}
