import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formspreeUrl = 'https://formspree.io/f/mojkppdg';

  loading = false;
  success = false;
  error = false;

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: [''],
    subject: ['', Validators.required],
    message: ['', Validators.required],

  });

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  submitForm() {
    if (this.contactForm.invalid) return;

    this.loading = true;

    this.http.post(this.formspreeUrl, this.contactForm.value, {
      headers: {
        'Accept': 'application/json'
      }
    }).subscribe({
      next: () => {
        this.success = true;
        this.error = false;
        this.loading = false;
        this.contactForm.reset();
      },
      error: () => {
        this.error = true;
        this.success = false;
        this.loading = false;
      }
    });
  }
}
