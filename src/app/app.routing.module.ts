import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';
import { LoginComponent } from './auth/login/login.component';

const appRoutes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: false } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }