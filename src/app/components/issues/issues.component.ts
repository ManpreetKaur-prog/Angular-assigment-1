import { Component, OnInit } from '@angular/core';
import { Issue } from 'src/app/Issue';
import { IssueService } from 'src/app/services/issue.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];

  constructor(private issueService: IssueService){

  }
  ngOnInit(): void {
    this.issueService.getIssues().subscribe((issues) => this.issues = issues);
  }
  deleteIssue(issue: Issue){
    this.issueService
    .deleteIssue(issue)
    .subscribe(()=>(this.issues=this.issues.filter(td=> td.id !== issue.id)))
}
onMarkItAsRead(issue:Issue)
  {
    issue.resolved=!issue.resolved;
  }
  onAddIssue(issue: Issue)
  {
      this.issueService.addIssueElement(issue).subscribe((issue)=> this.issues.push(issue) )
  }
}
