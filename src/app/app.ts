import { Component } from '@angular/core';
import { StartWithSignalsComponent } from './start-with-signals/start-with-signals.component';
import { ParentComponent } from './input-and-output/components/parent/parent.component';
import { FormsModule } from '@angular/forms';
import { Option2 } from './render-comps-programatically/option-2/option-2';
import { Option1 } from './render-comps-programatically/option-1/option-1';
import { NgComponentOutlet } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [ParentComponent, FormsModule, NgComponentOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  selectedCompName: 'one' | 'two' = 'one';

  get selectedComp() {
    return this.selectedCompName === 'one' ? Option1 : Option2;
  }
}
