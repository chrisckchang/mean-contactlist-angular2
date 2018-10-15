import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { PostDetailsComponent } from "./post/post-details/post-details.component";
import { PostListComponent } from "./post/post-list/post-list.component";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { firebase } from "../environments/firebase";

@NgModule({
  declarations: [AppComponent, PostDetailsComponent, PostListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
