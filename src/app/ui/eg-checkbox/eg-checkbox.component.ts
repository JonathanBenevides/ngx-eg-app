import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxEgCheckBox } from 'ngx-eg-app';
import { debounceTime, delay, of } from 'rxjs';

@Component({
  selector: 'app-checkbox',
  imports: [NgxEgCheckBox, ReactiveFormsModule],
  templateUrl: './eg-checkbox.component.html',
  styleUrl: './eg-checkbox.component.scss'
})
export class EgCheckboxComponent implements OnInit {

  private readonly fb = inject(FormBuilder);
  private readonly cdr = inject(ChangeDetectorRef);
  public label = 'initial value';
  public form!: FormGroup;

  public ngOnInit(): void {
    this.form = this.fb.group({
      check: new FormControl(false),
    })
    of('meu valor').pipe(delay(1000)).subscribe((a) => {
      this.label = a
      this.cdr.detectChanges()
    })
  }
}

