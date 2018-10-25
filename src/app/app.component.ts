import { Component } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  _isLoggedIn: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getUserDetails().subscribe(info => {
      this._isLoggedIn = info !== null;
    });
  }

  scrollHandler(e) {
    console.log(e);
  }

  logout() {
    this.authService.logout();
    window.location.reload();
  }

  isLoggedIn(): boolean {
    return this._isLoggedIn; //this.authService.isLoggedIn();
  }
}
