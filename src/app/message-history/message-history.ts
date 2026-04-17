import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Message {
  id: number;
  author: string;
  content: string;
  timestamp: Date;
  isOwn: boolean;
}

@Component({
  selector: 'app-message-history',
  imports: [CommonModule],
  templateUrl: './message-history.html',
  styleUrl: './message-history.css',
})
export class MessageHistory {
  messages: Message[] = [
    {
      id: 1,
      author: 'Alice',
      content: 'Hey, how are you?',
      timestamp: new Date(Date.now() - 600000),
      isOwn: false,
    },
    {
      id: 2,
      author: 'You',
      content: 'I am doing well, thanks for asking!',
      timestamp: new Date(Date.now() - 540000),
      isOwn: true,
    },
    {
      id: 3,
      author: 'Alice',
      content: 'That is great! 😊',
      timestamp: new Date(Date.now() - 480000),
      isOwn: false,
    },
    {
      id: 4,
      author: 'Alice',
      content: 'Want to grab coffee later?',
      timestamp: new Date(Date.now() - 420000),
      isOwn: false,
    },
    {
      id: 5,
      author: 'You',
      content: 'Sounds good! What time?',
      timestamp: new Date(Date.now() - 360000),
      isOwn: true,
    },
    {
      id: 6,
      author: 'Alice',
      content: 'How about 3 PM at the usual place?',
      timestamp: new Date(Date.now() - 300000),
      isOwn: false,
    },
    {
      id: 7,
      author: 'You',
      content: 'Perfect! See you then!',
      timestamp: new Date(Date.now() - 240000),
      isOwn: true,
    },
  ];

  formatTime(date: Date): string {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
}
