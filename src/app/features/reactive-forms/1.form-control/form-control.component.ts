import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent {
  protected nameControl = new FormControl('', {
    nonNullable: true,
  });

  protected reset() {
    this.nameControl.reset();
  }
}
