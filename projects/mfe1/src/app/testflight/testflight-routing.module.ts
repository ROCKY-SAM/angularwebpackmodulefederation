import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightViewComponent } from './flight-view/flight-view.component';

const routes: Routes = [
  {
    path: 'flights-view',
    component: FlightViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestflightRoutingModule { }
