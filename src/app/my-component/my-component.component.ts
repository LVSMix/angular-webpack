import { Component } from '@angular/core';

@Component({
  template: `
    <pre>
      <profile [name]="localState.name"
               [lastname]="localState.lastname"
               [position]="localState.position">
      </profile>
      <profile [name]="localState.name"
               [lastname]="localState.lastname"
               [position]="localState.position">
      </profile>
      <profile [name]="localState.name"
               [lastname]="localState.lastname"
               [position]="localState.position">
      </profile>
    </pre>
  `
})
export class MyComponent {

    public localState = {
      name: 'Marcelo',
      lastname: 'Carmona',
      position: 'Developer'
    };

}
