import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  constructor(private fb: FormBuilder) { }

  form = this.fb.group({
    nombrecompleto: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    comment: ['Introduce your commentary']
  });

  ngOnInit() {
  }

}
