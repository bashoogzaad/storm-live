import { NgModule } from '@angular/core';
import { CommonFooterComponent } from './common-footer/common-footer';
import { ProgressBarModule } from "angular-progress-bar";

@NgModule({
	declarations: [CommonFooterComponent],
	imports: [ProgressBarModule],
	exports: [CommonFooterComponent]
})
export class ComponentsModule {}
