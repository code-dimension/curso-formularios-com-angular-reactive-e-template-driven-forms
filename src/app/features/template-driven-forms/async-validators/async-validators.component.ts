import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-async-validators',
  imports: [FormsModule],
  templateUrl: './async-validators.component.html',
  styleUrl: './async-validators.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncValidatorsComponent {

  protected nickname = signal('')

}
