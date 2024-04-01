import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import PrimeNG modules
import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{ path: '', component: AppComponent }])],
    declarations: [ AppComponent ],
    bootstrap: [ AppComponent ],
    providers: [{ provide: APP_BASE_HREF, useValue: '/template' }]
})

export class AppModule {}