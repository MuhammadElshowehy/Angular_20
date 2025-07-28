import { Component } from '@angular/core';
import { StartWithSignalsComponent } from './start-with-signals/start-with-signals.component';
@Component({
  selector: 'app-root',
  imports: [StartWithSignalsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
