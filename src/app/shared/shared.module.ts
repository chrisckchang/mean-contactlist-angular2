import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FabComponent } from "./fab/fab.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FabComponent
  ],
  exports: [
    FabComponent
  ]
})
export class SharedModule { }
