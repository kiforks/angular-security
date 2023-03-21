import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	constructor(private readonly httpClient: HttpClient) {}

	public signUp(email: string, password: string) {}
}
