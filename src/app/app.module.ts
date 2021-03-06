import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http' 
import { LoadingSpinnerComponent } from './loading-spinner/loadingspinner.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent ,
    LoadingSpinnerComponent
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   
      
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
