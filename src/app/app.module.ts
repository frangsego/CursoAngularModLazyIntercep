import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptoresService } from './interceptores/interceptores.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: 
  [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptoresService,
        multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
