import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';
import { PostDetailsComponent } from './post/post-details/post-details.component';
import { LoginComponent } from './auth/login/login.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './services/auth.guard';

const appRoutes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'contar', component: PostDetailsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'sobre', component: AboutComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: false } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }