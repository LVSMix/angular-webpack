import { Component } from '@angular/core';

@Component({
  template: `
    <h1>{{localState.name}}</h1>
  `
})
export class MyComponent{

    public localState = {
      name: 'Marcelo'
    };


}
