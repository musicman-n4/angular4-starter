import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { GuardsHomeService } from './home/guards-home.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [GuardsHomeService],
    canActivateChild: [GuardsHomeService],
    canDeactivate: [GuardsHomeService],
    // resolve: [GuardsHomeService],
    canLoad: [GuardsHomeService],
    data: { title: 'home' }
  },
  { path: '**', component: PageNotFoundComponent }
];
export const AppRoutingProviders: any[] = [];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
