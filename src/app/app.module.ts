import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from './material-module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
