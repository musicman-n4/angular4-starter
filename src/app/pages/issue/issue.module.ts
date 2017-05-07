import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IssueComponent } from './issue.component';
import { IssueService } from './issue.service';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';
import { IssueInputComponent } from './issue-input/issue-input.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { IssueUpdateComponent } from './issue-update/issue-update.component';

@NgModule({
  declarations: [
    IssueComponent,
    IssueDetailComponent,
    IssueInputComponent,
    IssueListComponent,
    IssueUpdateComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    IssueService
  ]
})
export class IssueModule { }
