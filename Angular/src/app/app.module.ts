import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxFilterBuilderModule } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Service } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxFilterBuilderModule,
  ],
  providers: [Service],
  bootstrap: [AppComponent],
})
export class AppModule { }
