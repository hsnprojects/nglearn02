import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftnavComponent } from './components/leftnav/leftnav.component';
import { RightnavComponent } from './components/rightnav/rightnav.component';
import { MainBodyComponent } from './components/main-body/main-body.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LeftnavComponent,
    RightnavComponent,
    MainBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
