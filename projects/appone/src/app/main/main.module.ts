import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule } from '@angular/router';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import { ErrorComponent } from '../files/error.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
    

          { path: 'page1', component: PageoneComponent },
          { path: 'page2', component: PagetwoComponent },
 
      
      { path: '**', component: ErrorComponent }
    ])
  ]
})
export class MainModule { }
