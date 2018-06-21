import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThisWeeksFashionPage } from './this-weeks-fashion';
import { ComponentsModule } from "../../components/components.module";

@NgModule({
  declarations: [
    ThisWeeksFashionPage,
  ],
  imports: [
    IonicPageModule.forChild(ThisWeeksFashionPage),
    ComponentsModule
  ],
})
export class ThisWeeksFashionPageModule {}
