import {
  Component,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [ChildComponent],
  standalone: true,
})
export class ParentComponent implements OnInit {
  outsource: WritableSignal<string> = signal('go out');
  sendToTwoWay = 'tow way data binding.';

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.outsource.set('3 seconds');
      console.log(3);
    }, 3000);
  }

  logChangedName(name: string) {
    console.log(name);
  }
}
