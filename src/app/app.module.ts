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

@NgModule({
  declarations: [
    AppComponent
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
    NoopAnimationsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
