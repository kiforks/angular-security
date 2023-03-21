import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lesson } from '../../interfaces/lesson';
import { Observable } from 'rxjs';

@Injectable()
export class LessonsService {
	constructor(private http: HttpClient) {}

	public loadAllLessons(): Observable<Lesson[]> {
		return this.http.get<Lesson[]>('/api/lessons');
	}

	public findLessonById(id: number): Observable<Lesson> {
		return this.http.get<Lesson>('/api/lessons/' + id);
	}
}
