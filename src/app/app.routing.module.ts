import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './post/post-list/post-list.component';

const appRoutes: Routes = [
  { path: '', component: PostListComponent },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot( appRoutes, { enableTracing: false } )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }