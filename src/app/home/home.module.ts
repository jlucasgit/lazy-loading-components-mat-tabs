import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { DemoMaterialModule } from '../material-module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DemoMaterialModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }