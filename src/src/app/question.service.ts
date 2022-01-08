import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import {catchError, map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
question:Array<string>=[];
  
  constructor(public http:HttpClient) { }

  showQuestion():Observable<Question[]>{
    return this.http.get<Question[]>("assets/question.json")
    .pipe(map((data: any) => data.questions ));
  }
}
