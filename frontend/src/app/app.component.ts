import { Component } from '@angular/core';
import { MessageComponent } from './messages.components'

@Component({
  selector: 'app-root',
  template: '<h1>Hello {{title}}</h1><messages></messages>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Application';
}
