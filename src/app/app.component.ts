import { Component, EventEmitter, Input, Output } from '@angular/core';
import {ChildcomponentComponent} from './childcomponent/childcomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  name= "Afroz";
  age= 24;
  Email= "afroz@gmail.com";
}
