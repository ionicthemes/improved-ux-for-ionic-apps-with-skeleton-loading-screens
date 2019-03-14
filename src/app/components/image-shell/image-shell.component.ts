import { Component, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-image-shell',
  templateUrl: './image-shell.component.html',
  styleUrls: [
    './image-shell.component.scss'
  ]
})
export class ImageShellComponent {
  // To debug shell styles
  private debugMode = false;

  _src = '';
  _alt = '';

  @HostBinding('class.img-loaded') imageLoaded = false;

  @Input()
  set src(val: string) {
    if (!this.debugMode) {
      this._src = (val !== undefined && val !== null) ? val : '';
    }
  }

  @Input()
  set alt(val: string) {
    this._alt = (val !== undefined && val !== null) ? val : '';
  }

  constructor() {}

  _imageLoaded() {
    this.imageLoaded = true;
  }
}
