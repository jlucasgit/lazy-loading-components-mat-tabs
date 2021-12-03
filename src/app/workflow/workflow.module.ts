import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkflowComponent } from './workflow.component';
import { WorkflowRoutingModule } from './workflow-routing.module';

@NgModule({
  imports: [CommonModule, WorkflowRoutingModule],
  declarations: [WorkflowComponent],
})
export class WorkflowModule {}
