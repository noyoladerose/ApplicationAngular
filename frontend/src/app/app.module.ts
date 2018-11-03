import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule, MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages.components'
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule, BrowserAnimationsModule, MatButtonModule,  MatCardModule, MatInputModule, MatSnackBarModule, MatToolbarModule, HttpModule
  ],
  declarations: [
    AppComponent,MessageComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
