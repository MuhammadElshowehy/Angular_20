import {
  afterEveryRender,
  afterNextRender,
  Component,
  DestroyRef,
  DoCheck,
  EffectRef,
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

  data = 'Initial data';
  renderCount = 0;
  afterEveryRender!: EffectRef;

  constructor(private destroyRef: DestroyRef) {
    // This will only run once, after the first render
    afterNextRender(() => {
      console.log('afterNextRender: This runs only once!');
      // Perfect for:
      // - Setting up event listeners
      // - Initializing third-party libraries
      // - One-time DOM measurements
    });

    // This will run after every render (including the first one)
    this.afterEveryRender = afterEveryRender(() => {
      this.renderCount++;
      console.log(
        `afterEveryRender: This runs after every render! Count: ${this.renderCount}`
      );
      // Perfect for:
      // - Updating DOM elements based on data changes
      // - Recalculating layouts
      // - Syncing with external systems
    });

    destroyRef.onDestroy(() => {
      this.afterEveryRender.destroy();
      console.log('destroyed');
    });
  }

  updateData() {
    this.data = `Updated at ${new Date().toLocaleTimeString()}`;
  }

  ngOnInit() {
    setTimeout(() => {
      this.outsource.set('3 seconds');
      // console.log(3);
    }, 3000);
  }

  logChangedName(name: string) {
    // console.log(name);
  }
}
