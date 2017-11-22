import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BucketsComponent } from './buckets/buckets.component';
import { SensorsComponent } from './sensors/sensors.component';


@NgModule({
  declarations: [
    AppComponent,
    BucketsComponent,
    SensorsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
