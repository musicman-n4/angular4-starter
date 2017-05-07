import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IssueModule } from './issue/issue.module';
import { WikiModule } from './wiki/wiki.module';

import { TopComponent } from './top/top.component';
import { PagesComponent } from './pages.component';

import { PagesRouting, PagesRoutingProviders } from './pages.routes';

@NgModule({
  imports: [
    CommonModule,
    IssueModule,
    WikiModule,
    PagesRouting
  ],
  providers: [PagesRoutingProviders],
  declarations: [TopComponent, PagesComponent]
})
export class PagesModule { }
