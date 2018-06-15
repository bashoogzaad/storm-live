import { ComponentsModule } from "../../components/components.module";
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BigPictureSlidePage } from './big-picture-slide';

@NgModule({
  declarations: [
    BigPictureSlidePage,
  ],
  imports: [
    IonicPageModule.forChild(BigPictureSlidePage),
    ComponentsModule
  ],
})
export class BigPictureSlidePageModule {}
