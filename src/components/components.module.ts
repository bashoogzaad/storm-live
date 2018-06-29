import { NgModule } from '@angular/core';
import { CommonFooterComponent } from './common-footer/common-footer';
import { ProgressBarComponent } from './progress-bar/progress-bar';

@NgModule({
	declarations: [CommonFooterComponent,
    ProgressBarComponent],
	imports: [],
	exports: [CommonFooterComponent,
    ProgressBarComponent]
})
export class ComponentsModule {}
