import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { firebase } from "../environments/firebase";

import { AppComponent } from "./app.component";
import { PostDetailsComponent } from "./post/post-details/post-details.component";
import { PostListComponent } from "./post/post-list/post-list.component";
import { LoginComponent } from "./auth/login/login.component";
import { AboutComponent } from "./about/about.component";
import { PostService } from "./post/post.service";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app.routing.module";

@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    PostListComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
