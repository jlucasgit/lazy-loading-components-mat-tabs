import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../material-module';
import { SynthesisComponent } from './synthesis.component';

@NgModule({
  imports: [CommonModule, DemoMaterialModule],
  declarations: [SynthesisComponent],
})
export class SynthesisModule {}
