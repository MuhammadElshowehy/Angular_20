import { Component } from '@angular/core';
import { StartWithSignalsComponent } from './start-with-signals/start-with-signals.component';
import { ParentComponent } from './input-and-output/components/parent/parent.component';
@Component({
  selector: 'app-root',
  imports: [ParentComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
