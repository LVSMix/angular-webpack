import { Component, Input } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <div>Profile: {{name}} - {{lastname}} - {{position}}</div>
  `
})
export class ProfileComponent {

  @Input() public name: string = 'sin valor';
  @Input() public lastname: string = 'otro';
  @Input() public position: string = 'lalla';

}
