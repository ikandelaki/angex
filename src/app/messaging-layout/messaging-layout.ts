import { Component } from '@angular/core';
import { UserList } from '../user-list/user-list';
import { MessageHistory } from '../message-history/message-history';
import { SettingsSidebar } from '../settings-sidebar/settings-sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-messaging-layout',
  imports: [UserList, MessageHistory, SettingsSidebar, RouterOutlet],
  templateUrl: './messaging-layout.html',
  styleUrl: './messaging-layout.css',
})
export class MessagingLayout {}
