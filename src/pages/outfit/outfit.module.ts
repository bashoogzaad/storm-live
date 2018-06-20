import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OutfitPage } from './outfit';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    OutfitPage,
  ],
  imports: [
    IonicPageModule.forChild(OutfitPage),
    ComponentsModule
  ],
})
export class OutfitPageModule {}
