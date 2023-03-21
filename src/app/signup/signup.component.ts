import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../common/forms.css']
})
export class SignupComponent {
    public form!: FormGroup;

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
            confirm: ['', Validators.required]
        });
    }


    public signUp(): void {
        const val = this.form.value;

        //TODO
    }

}
