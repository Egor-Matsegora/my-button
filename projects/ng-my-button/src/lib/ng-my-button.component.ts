import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-ng-my-button',
  standalone: true,
  imports: [],
  template: `
    <button>
      {{ text }}
    </button>
  `,
  styles: ``
})
export class NgMyButtonComponent {
  @Input() text: string = '';
}
