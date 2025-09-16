import {
  AfterContentChecked,
  afterEveryRender,
  afterNextRender,
  AfterViewChecked,
  Component,
  computed,
  contentChild,
  contentChildren,
  DestroyRef,
  DoCheck,
  EffectRef,
  ElementRef,
  inject,
  input,
  OnInit,
  Renderer2,
  signal,
  TemplateRef,
  viewChild,
  viewChildren,
  WritableSignal,
} from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  imports: [ChildComponent, FormsModule],
  standalone: true,
})
export class ParentComponent implements OnInit, AfterViewChecked {
  inputValue: string = '';

  outsource: WritableSignal<string> = signal('go out');
  sendToTwoWay = 'tow way data binding.';

  data = 'Initial data';
  renderCount = 0;
  afterEveryRender!: EffectRef;

  child = viewChild(ChildComponent);
  childComp = computed(() => this.child()?.text);

  childern = viewChildren(ChildComponent, { read: ElementRef });
  childrenText = computed(() => this.childern());

  content = contentChild(ChildComponent, { read: TemplateRef });
  contentMethods = computed(() => this.content());

  elementRef = inject(ElementRef);

  constructor(private destroyRef: DestroyRef, private renderer: Renderer2) {
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
      // this.renderCount++;
      // console.log(
      //   `afterEveryRender: This runs after every render! Count: ${this.renderCount}`
      // );
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
    console.log(this.contentMethods());
    // console.log(this.childComp());
    console.log(this.childrenText());

    setTimeout(() => {
      console.log(this.childComp());
      // console.log(this.childrenText());
      this.outsource.set('3 seconds');
      // console.log(3);
    }, 3100);
  }

  ngAfterViewChecked(): void {
    console.log(this.contentMethods());
    let el = this.elementRef.nativeElement.querySelector('#par');
    // el.style.color = 'green';
    this.renderer.setStyle(el, 'color', 'blue');
    console.log(el);
  }

  logChangedName(name: string) {
    // console.log(name);
  }

  inputClicked(event: any) {
    this.inputValue = event.target.value;
  }

  onKey(event: Event): void {
    console.log(true);
  }
}
