import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-text-shell',
  templateUrl: './text-shell.component.html',
  styleUrls: [
    './text-shell.component.scss'
  ]
})
export class TextShellComponent {
  _data: '';

  @HostBinding('class.text-loaded') textLoaded = false;

  @Input() set data(val: any) {
    this._data = (val !== undefined && val !== null) ? val : '';

    if (this._data && this._data !== '') {
      this.textLoaded = true;
    } else {
      this.textLoaded = false;
    }
  }

  constructor() { }
}
