import { Routes } from '@angular/router';
import { LessonsComponent } from './components/lessons/lessons.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

export const routesConfig: Routes = [
	{
		path: 'lessons',
		component: LessonsComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'signup',
		component: SignupComponent,
	},
	{
		path: '',
		redirectTo: '/lessons',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: '/lessons',
		pathMatch: 'full',
	},
];
