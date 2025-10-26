import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import { NgxEgButton, NgxEgInput } from 'ngx-eg-app';

@Component({
  selector: 'app-content',
  imports: [NgxEgButton, NgxEgInput, ReactiveFormsModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {

  public form = new FormGroup({
    name: new FormControl('')
  });

  constructor(private readonly modalCtrl: ModalController) {}

  public dismiss(): void {
    this.modalCtrl.dismiss(this.form.value);
  }
}
