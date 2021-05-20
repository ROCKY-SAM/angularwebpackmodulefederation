import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestflightRoutingModule } from './testflight-routing.module';
import { FlightViewComponent } from './flight-view/flight-view.component';


@NgModule({
  declarations: [
    FlightViewComponent
  ],
  imports: [
    CommonModule,
    TestflightRoutingModule
  ]
})
export class TestflightModule { }
