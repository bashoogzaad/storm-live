import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YtVideoPage } from './yt-video';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    YtVideoPage,
  ],
  imports: [
    IonicPageModule.forChild(YtVideoPage),
    ComponentsModule
  ],
})
export class YtVideoPageModule {}
