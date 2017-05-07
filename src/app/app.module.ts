import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/primeng';     // accordion and accordion tab
import { MenuItem } from 'primeng/primeng';            // api
import { ButtonModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';

import { AppService } from './app.service';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// import { IssueComponent } from './pages/issue/issue.component';
// import { WikiComponent } from './pages/wiki/wiki.component';

import { Routing, AppRoutingProviders } from './app.routes';
import { FooterComponent } from './footer/footer.component';

import { PagesModule } from './pages/pages.module';

import { GuardsHomeService } from './home/guards-home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    DropdownModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    PagesModule,
    Routing
  ],
  providers: [
    AppRoutingProviders,
    GuardsHomeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
