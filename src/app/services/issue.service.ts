import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Issue } from 'src/app/Issue';
const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private backendUrl: string ='http://localhost:3000/issues'

  constructor(private httpClient: HttpClient) {}

    getIssues(): Observable<Issue[]> {
      return this.httpClient.get<Issue[]>(this.backendUrl);
}
deleteIssue(issue:Issue): Observable<Issue>
{
  const url=  `${this.backendUrl}/${issue.id}`;  
  return this.httpClient.delete<Issue>(url)
}
addIssueElement(issue: Issue ): Observable<Issue>{
  return this.httpClient.post<Issue> (this.backendUrl,issue, options)
}
}
