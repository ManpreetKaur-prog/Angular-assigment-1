import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Issue } from 'src/app/Issue';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})
export class AddIssueComponent implements OnInit {

  @Output() onAddIssue: EventEmitter<Issue> = new EventEmitter()
  
  title:string ='1';
  description:string='2';
  resolved: boolean=false;
  constructor(){

  }
  ngOnInit(): void {
      
  }
  onSubmit()
  {
    if(!this.title)
    {
      alert('Please enter correct title for issue');
      return;
    }
    const newIssue = {
      title:this.title,
      description: this.description,
      resolved: this.resolved
  }
  this.onAddIssue.emit(newIssue);
  
  this.title=''
  this.description=''
  this.resolved=false;
  }
}
