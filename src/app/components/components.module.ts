import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TextShellComponent } from './text-shell/text-shell.component';
import { ImageShellComponent } from './image-shell/image-shell.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    TextShellComponent,
    ImageShellComponent
  ],
  exports: [
    TextShellComponent,
    ImageShellComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
