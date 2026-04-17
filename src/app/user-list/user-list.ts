import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  id: number;
  name: string;
  status: 'online' | 'offline' | 'away';
  avatar: string;
}

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  users: User[] = [
    { id: 1, name: 'Alice Johnson', status: 'online', avatar: '👩' },
    { id: 2, name: 'Bob Smith', status: 'online', avatar: '👨' },
    { id: 3, name: 'Carol White', status: 'away', avatar: '👩‍🦰' },
    { id: 4, name: 'David Brown', status: 'offline', avatar: '👨‍💼' },
    { id: 5, name: 'Emma Davis', status: 'online', avatar: '👩‍🔬' },
    { id: 6, name: 'Frank Miller', status: 'offline', avatar: '👨‍🎓' },
    { id: 7, name: 'Grace Lee', status: 'online', avatar: '👩‍💻' },
    { id: 8, name: 'Henry Wilson', status: 'away', avatar: '👨‍🎨' },
  ];
}
