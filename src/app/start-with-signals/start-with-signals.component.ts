import {
  Component,
  computed,
  effect,
  EffectRef,
  linkedSignal,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-start-with-signals',
  templateUrl: './start-with-signals.component.html',
  styleUrls: ['./start-with-signals.component.scss'],
})
export class StartWithSignalsComponent implements OnInit {
  showCount: WritableSignal<boolean> = signal(false);
  count: WritableSignal<number> = signal(0);
  conditionalCount: Signal<string> = signal('');
  effect: EffectRef;

  constructor() {
    this.effect = effect(() => {
      console.log(`The count is: ${this.count()}`);
    });
  }

  ngOnInit() {
    this.showCount = signal(true);
    this.count = signal(10);
    this.conditionalCount = computed(() => {
      if (this.showCount()) {
        return `The count is ${this.count()}.`;
      } else {
        return 'Nothing to see here!';
      }
    });

    setTimeout(() => {
      // this.showCount.set(false);
      // this.effect.destroy();
      // this.count.set(20); // This will not affect conditionalCount since showCount is false
      // note: count() based on showCount(), if you change count()
      // and showCount() is false, it will not update the conditionalCount.
    }, 3000);

    // linkedSignal //
    const shippingOptions = signal(['Ground', 'Air', 'Sea']);
    const selectedOption = linkedSignal(() => shippingOptions()[0]);
    // const selectedOption = signal(shippingOptions()[0]); // not work
    console.log(selectedOption()); // 'Ground'
    selectedOption.set(shippingOptions()[2]);
    console.log(selectedOption()); // 'Sea'
    shippingOptions.set(['Email', 'Will Call', 'Postal service']);
    console.log(selectedOption()); // 'Email'
  }
}
