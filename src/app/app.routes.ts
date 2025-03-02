import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import path from 'path';
import { CategoryListComponent } from './features/category/category-list/category-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'blank',
    component: BlankComponent,
  },
];
