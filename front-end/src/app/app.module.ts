import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListphonenumberComponent } from './listphonenumber/listphonenumber.component';
import {HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HttpErrorInterceptor } from './http-error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListphonenumberComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
