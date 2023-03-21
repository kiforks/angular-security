import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	public user$!: Observable<User>;

	constructor(private readonly authService: AuthService) {}

	public ngOnInit(): void {
		this.user$ = this.authService.user$;
	}
}
