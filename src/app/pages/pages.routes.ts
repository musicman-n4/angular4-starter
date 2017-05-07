import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { IssueComponent } from './issue/issue.component';
import { IssueUpdateComponent } from './issue/issue-update/issue-update.component';
import { TopComponent } from './top/top.component';
import { WikiComponent } from './wiki/wiki.component';

const pagesRoutes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'top', pathMatch: 'full', data: { title: 'Top' } },
      { path: 'top', component: TopComponent, data: { title: 'Top' } },
      { path: 'issue', component: IssueComponent, data: { title: 'Issue Update' } },
      { path: 'wiki', component: WikiComponent, data: { title: 'Wiki' } }
    ]
  }
];

export const PagesRoutingProviders: any[] = [];

export const PagesRouting: ModuleWithProviders = RouterModule.forChild(pagesRoutes);
