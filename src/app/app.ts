import { Component } from '@angular/core';
import { MessagingLayout } from './messaging-layout/messaging-layout';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MessagingLayout],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
