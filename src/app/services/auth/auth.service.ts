import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../interfaces/user';
import { shareReplay } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private readonly user$$ = new BehaviorSubject<User>({ id: undefined, email: '' });

	public readonly user$: Observable<User> = this.user$$.asObservable();

	constructor(private readonly httpClient: HttpClient) {}

	public signUp(email: string, password: string): Observable<User> {
		const resp = this.httpClient.post<User>('/api/signup', { email, password });

		return resp.pipe(shareReplay());
	}
}
