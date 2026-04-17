import { Component, signal } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  headerName = signal('Header');

  setHeader(val: string) {
    this.headerName.update((headerName) => headerName + val);
  }
}
