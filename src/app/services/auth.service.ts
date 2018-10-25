import { Injectable } from "@angular/core";

import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Observable } from "rxjs";
import { AngularFireDatabase } from "@angular/fire/database";
import { Router } from "@angular/router";

import { first } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  private additionalUserInfo: any = {};

  private PHOTO_SIZE = { width: 600, height: 600 };

  users: Observable<any[]>;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.user;

    afAuth.auth.onAuthStateChanged(user => {
      this.doS();
    });

    if (this.isLoggedIn) {
      this.db
        .object("users/" + localStorage.getItem("userID"))
        .valueChanges()
        .subscribe(action => {
          this.additionalUserInfo = action;
        });
    }

    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    });
  }

  async doS() {
    const u = await this.isLoggedIn();
    if (u) {
      this.router.navigate(["/contar"]);
    } else {
      this.router.navigate(["/"]);
    }
  }

  login = () => {
    const provider = new auth.FacebookAuthProvider();
    // provider.addScope("user_birthday");
    // provider.addScope("user_gender");

    this.afAuth.auth
      .signInWithPopup(provider)
      .then(data => {
        const usersRef = this.db.list("users");

        const { profile } = data.additionalUserInfo as any;

        const photoURL =
          data.user.photoURL +
          "?type=large&width=" +
          this.PHOTO_SIZE.width +
          "&height=" +
          this.PHOTO_SIZE.height;

        this.additionalUserInfo = {
          id: profile.id,
          name: profile.name,
          firstName: profile.name.split(" ")[0],
          gender: "", //profile.gender,
          age: 0, //this.calculateAge(new Date(profile.birthday)),
          photoURL
        };

        usersRef.set(profile.id, this.additionalUserInfo);

        localStorage.setItem("userID", profile.id);
        window.location.reload();
      })
      .catch(err => console.log(err.message));
  };

  private calculateAge = date => {
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  isLoggedIn = () => {
    return this.afAuth.authState.pipe(first()).toPromise();
  };

  logout = () => {
    localStorage.removeItem("userID");
    this.afAuth.auth.signOut();
  };

  getUserDetails = () => {
    return this.db
      .object("users/" + localStorage.getItem("userID"))
      .valueChanges();
  };

  getPosts = () => {
    return this.db.list("/posts").valueChanges();
  };
}
