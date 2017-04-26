import { Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENT, DECREMENT, RESET } from './../counter';
import { ADD_PROFILE, REMOVE_PROFILE, RESET_PROFILE, Profile } from './../profile';
import { Observable } from 'rxjs/Observable';

interface AppState {
  counter: number;
}

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

    <input type="text" [(ngModel)]="localState.name" #myinput/>
    <button (click)="submit($event)" >submit</button>

    <button (click)="increment()">Increment</button>
		<div>Current Count: {{ counter | async }}</div>
		<button (click)="decrement()">Decrement</button>

		<button (click)="reset()">Reset Counter</button>

    <button (click)="addProfile()">Add Profile</button>
    <div>profile: {{profile.name}} - {{profile.lastname}} - {{profile.position}}</div>

    <pre>Testing ngrx</pre>
  `
})
export class MyComponent {
    public localState = {
      name: 'Marcelo',
      lastname: 'Carmona',
      position: 'Developer'
    };


    public counter: Observable<number>;

    public profile: any;

    @ViewChild('myinput') private myinput;

    constructor(private store: Store<AppState>) {
      this.counter = store.select('counter');

      this.store.select('profile').subscribe((profile) => this.profile = profile);
    }

    public submit(event) {
      this.localState.name =  this.myinput.nativeElement.value + 'lala';
    }

    public increment() {
      this.store.dispatch({ type: INCREMENT });
    }

    public decrement() {
      this.store.dispatch({ type: DECREMENT });
    }

    public reset() {
      this.store.dispatch({ type: RESET });
    }

    public addProfile() {
      const profile = { name: 'lala', lastname: 'pepe', position: 'position' };
      this.store.dispatch({ type: ADD_PROFILE, payload: profile });
    }
}
