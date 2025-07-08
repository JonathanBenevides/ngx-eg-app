import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEgCheckBox } from 'ngx-eg-app';

@Component({
  selector: 'app-checkbox',
  imports: [NgxEgCheckBox, ReactiveFormsModule],
  templateUrl: './eg-checkbox.component.html',
  styleUrl: './eg-checkbox.component.scss'
})
export class EgCheckboxComponent implements OnInit {

  private readonly fb = inject(FormBuilder);

  public form!: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      check: new FormControl(false),
    })
    this.form.get('check')!.valueChanges.subscribe(() => console.log(this.form))
  }
}

