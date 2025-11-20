import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {


  submitted = false;

  form = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  submitForm() {
    console.log("FORM DATA:", this.form);
    this.submitted = true;

    // ❗️ To send via API later:
    // this.http.post("YOUR_BACKEND_URL", this.form).subscribe(...)
  }
}
