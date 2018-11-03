import { Component } from '@angular/core'

@Component({
    selector: 'messages',
    template: `
    <div *ngFor="let messages of messages">
    <mat-card style="margin:8px">
    <mat-card-title>{{messages.owner}}</mat-card-title>
    <mat-card-content>{{messages.text}}</mat-card-content>
    </mat-card>
    </div>
    <button md-button>test</button>
    `
})
export class MessageComponent {

    messages = [{text: 'some text', owner: 'Time'},{text: 'text', owner: 'Day'}];
}