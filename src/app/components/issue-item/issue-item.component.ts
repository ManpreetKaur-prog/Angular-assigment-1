import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Issue } from 'src/app/Issue';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { outputAst } from '@angular/compiler';


@Component({
  selector: 'app-issue-item',
  templateUrl: './issue-item.component.html',
  styleUrls: ['./issue-item.component.css']
})
export class IssueItemComponent {
  @Input() issue: Issue = {   
    id: 1,
    title: 'Issue -1',
    description: "Issue -1 description",
    resolved: false };

    @Output() onDeleteIssue: EventEmitter<Issue>=new EventEmitter;
    @Output() OnmarkItAsRead: EventEmitter<Issue>=new EventEmitter;
    faTimes=faTimes;

    onDelete(issue: Issue)
    {
      this.onDeleteIssue.emit(issue)
    }
    markItAsRead(todo:Issue)
    { 
      this.OnmarkItAsRead.emit(todo)
    }
}
