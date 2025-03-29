import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonApp } from '@ionic/angular/standalone';
import { EgButton } from "../../projects/eg-app/src/button/eg-button.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [IonApp, RouterOutlet, EgButton, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly fb = inject(FormBuilder);
  public form!: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(''),
      pass: new FormControl('')

    })
  }

  submit() {
    console.log('entrou')
  }
}
