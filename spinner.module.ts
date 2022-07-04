import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SpinnerComponent } from './spinner.component'; // ?

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		SpinnerComponent
	],
	providers: [],
	exports: [SpinnerComponent]

})

export class SpinnerModule { }