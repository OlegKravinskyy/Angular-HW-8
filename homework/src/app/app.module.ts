import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsTask1Component } from './forms-task1/forms-task1.component';
import { FormsTask2Component } from './forms-task2/forms-task2.component';
import { FormsTask3Component } from './forms-task3/forms-task3.component';
import { FormsTask4Component } from './forms-task4/forms-task4.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsTask1Component,
    FormsTask2Component,
    FormsTask3Component,
    FormsTask4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
