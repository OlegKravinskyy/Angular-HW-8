import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsTask1Component } from '../forms-task1/forms-task1.component';
import { FormsTask2Component } from '../forms-task2/forms-task2.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [FormsTask1Component],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BrowserModule],
  exports: [FormsTask1Component, FormsTask2Component],
})
export class FormsModuleModule {}
