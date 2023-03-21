import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';

@Component({
	selector: 'signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.css', '../../common/forms.css'],
})
export class SignupComponent {
	public form!: FormGroup;

	constructor(private readonly fb: FormBuilder, private readonly authService: AuthService) {
		this.form = this.fb.group({
			email: ['', Validators.required],
			password: ['', Validators.required],
			confirm: ['', Validators.required],
		});
	}

	public signUp(): void {
		const { email, password, confirm } = this.form.value;

		if (email && password && password === confirm) {
            this.authService.signUp(email, password).subscribe(() => {
				console.log('User created succesfully');
			}, console.error);
		}
	}
}
